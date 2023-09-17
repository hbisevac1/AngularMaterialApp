import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
  ngOnInit(): void {
    this.updatePaginatedPhotos()
  }


photos = [{ title: 'Waterfall', url: '../assets/photos/beautiful-square-waterfall-photo-l.jpg' },
{ title: 'Flower', url: '../assets/photos/big-picture-of-flower-l.jpg' },
{ title: 'Forrest', url: '../assets/photos/green-waterfall-photo-l.jpg' },]
paginatedPhotos: any[] = []

  pageSize = 1
  currentPage = 0
  @ViewChild(MatPaginator) paginator : MatPaginator | undefined;


  onPageChange(event : PageEvent){
    this.currentPage = event.pageIndex;
    this.updatePaginatedPhotos();
  }

  private updatePaginatedPhotos() {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedPhotos = this.photos.slice(startIndex, endIndex);
  }



}
