import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Job } from 'src/app/shared/models/job.model';
import { MatSort } from '@angular/material';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  displayedColumns: string[] = ['title', 'companyname', 'location', 'skills', 'experience'];
  dataSource: any;
  allJobs: any;
  filteredJobs: any;
  selectedFilter: any;
  filterText: any;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private dataProvider: DataService) { }

  ngOnInit() {
    this.dataProvider.getJobsFromApi().subscribe(res => {
      this.allJobs = res['data'];
      this.setDataSource(this.allJobs);
      this.getFilterJobCount(this.dataSource.filteredData.length);
    });
  }

  applyFilter(filterValue: string) {
    const allData = this.dataSource.data;
    if (this.selectedFilter) {
      const selectedField = this.selectedFilter;
      const filteredDataByColumn = allData.filter((job) => {
        return job[selectedField].trim().toLowerCase().includes(filterValue.trim().toLowerCase());
      });
      this.setDataSource(filteredDataByColumn);
    } else {
      this.dataSource.filter = filterValue.trim().toLowerCase();
      this.getFilterJobCount(this.dataSource.filteredData.length);
    }
  }

  getFilterJobCount(len) {
    this.filteredJobs = len;
  }

  setDataSource(arr) {
    this.dataSource = new MatTableDataSource<Job[]>(arr);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getFilterJobCount(arr.length);
  }

  clearFilter() {
    this.setDataSource(this.allJobs);
    this.selectedFilter = '';
    this.filterText = '';
  }

}
