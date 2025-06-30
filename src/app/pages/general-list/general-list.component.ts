import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { BackService } from 'src/app/services/backService';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule} from "@angular/forms";
import {DialogComponent} from "../../sharepage/dialog/dialog.component";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef,
  MatRow, MatRowDef,
  MatTable,
  MatTableDataSource
} from '@angular/material/table';
import {MatDialog} from "@angular/material/dialog";
import {MatCheckbox, MatCheckboxChange} from "@angular/material/checkbox";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {MatError, MatFormField, MatInput, MatLabel} from "@angular/material/input";
import {MatOption, MatSelect} from "@angular/material/select";
import {NgForOf, NgIf, NgStyle} from "@angular/common";
import {NavbarComponent} from "../../sharepage/navbar/navbar.component";
import {MatFabButton} from "@angular/material/button";

interface Item {
  id: string;
  title: string;
  number: number;
  check: boolean;
}

interface SelectedItem {
  item: Item;
  quantityControl: FormControl;
}

@Component({
  selector: 'app-general-list',
  templateUrl: './general-list.component.html',
  imports: [
    MatProgressSpinner,
    MatPaginator,
    MatFormField,
    MatLabel,
    MatSelect,
    MatError,
    NgStyle,
    NavbarComponent,
    MatCheckbox,
    MatTable,
    MatCell,
    MatHeaderCell,
    MatHeaderRow,
    MatRow,
    ReactiveFormsModule,
    MatOption,
    MatFabButton,
    MatColumnDef,
    MatInput,
    NgIf,
    MatRowDef,
    MatHeaderRowDef,
    MatCellDef,
    NgForOf,
    MatHeaderCellDef,
  ],
  styleUrls: ['./general-list.component.scss']
})
export class GeneralListComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  public list = new MatTableDataSource<Item>([]);
  public selectedItems: SelectedItem[] = [];

  form: FormGroup;

  constructor(private fb: FormBuilder, private backService: BackService, private router: Router, public dialog: MatDialog) {
    this.form = this.fb.group({
      name_user: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.loadList();
  }

  ngAfterViewInit() {
    this.list.paginator = this.paginator;
    this.list.sort = this.sort;
  }

  loadList() {
    this.backService.getList().subscribe((data: Item[]) => {
      this.list.data = data;

      this.list.paginator = this.paginator;
      this.list.sort = this.sort;
      this.list.sortingDataAccessor = (item, property) => {
        switch (property) {
          case 'title': return item.title;
          case 'number': return item.number;
          case 'id': return item.id;
          case 'check': return item.check ? 1 : 0;
          default: return '';
        }
      };

      this.sort.active = 'title';
      this.sort.direction = 'asc';
      this.list.sort = this.sort;
    });
  }

  onSelectItem(item: Item, event: MatCheckboxChange) {
    if (event.checked) {
      this.selectedItems.push({
        item,
        quantityControl: new FormControl(1, Validators.required)
      });
    } else {
      this.selectedItems = this.selectedItems.filter(selected => selected.item.id !== item.id);
    }
  }

  onQuantityChange(item: Item, quantity: number): void {
    const selectedItem = this.selectedItems.find(selected => selected.item.id === item.id);
    if (selectedItem) {
      selectedItem.quantityControl.setValue(quantity);
    }
  }

  getQuantityOptions(max: number): number[] {
    return Array.from({ length: max }, (_, i) => i + 1);
  }

  enviar() {
    if (this.form.invalid || this.selectedItems.length === 0) {
      this.openDialog();
      return;
    }

    const userName = this.form.get('name_user')?.value;

    this.selectedItems.forEach(selected => {
      const quantity = selected.quantityControl.value;
      this.backService.update(
        { item: selected.item, quantity },
        userName
      );
    });

    this.router.navigate(['/thanks']);
  }

  openDialog(): void {
    this.dialog.open(DialogComponent);
  }
}
