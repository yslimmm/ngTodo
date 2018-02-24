import { Component, OnInit } from '@angular/core';
import {AdminService} from '../admin.service';
import {NewsVO} from '../../domain/news.vo';
import {PageVO} from '../../domain/page.vo';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  newsList: NewsVO[];   // Array<NewsVo>
  page: PageVO;

  constructor(private adminService: AdminService) {

    // 여기서 pageVO 생성자를 하면 나중에 리펙토링시 중복될 수 있으니 여기다 하지말고 PageVO 생성할때 바로 하자.
    this.page = new PageVO(0, 5, 0, [5, 15, 30, 60, 90]);
    // this.page.pageIndex = 0;
    // this.page.pageSize = 5;
    // this.page.totalCount = 0;
    // this.page.pageSizeOptions = [5, 15, 30, 60, 90];
  }

  ngOnInit() {
    const params = {
      start_index: 0,
      page_size: 5
    }
    this.adminService.findNews(params).subscribe(body => {
        this.newsList = body['data'];
        console.log(this.newsList);
      });
  }

}
