import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { MdlTabelaDataSource } from './mdl-tabela-datasource';

@Component({
  selector: 'app-mdl-tabela',
  templateUrl: './mdl-tabela.component.html',
  styleUrls: ['./mdl-tabela.component.css']
})
export class MdlTabelaComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MdlTabelaDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new MdlTabelaDataSource(this.paginator, this.sort);
  }
}
