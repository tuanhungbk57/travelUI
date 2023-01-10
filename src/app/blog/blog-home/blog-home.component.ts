import { Component, OnInit } from '@angular/core';
import { BlogDetailService } from 'src/app/service/blog-detail.service';
import { BlogHomeService } from 'src/app/service/blog-home.service';
import { BlogService } from 'src/app/service/blog.service';

@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.scss']
})
export class BlogHomeComponent implements OnInit {

  blogHome: any;
  blogs: any[] = [];

  constructor(public blogHomeService: BlogHomeService, public blogService: BlogService) { }

  ngOnInit(): void {
    this.getBlogHome();
    this.getBlogDetailList();
  }

  getBlogHome(){
    this.blogHomeService.getInfo().subscribe((data: any) =>{
      this.blogHome = data;
    })
  }

  getBlogDetailList(){
    this.blogService.getList().subscribe((data: any)=>{
      this.blogs = this.blogService.splitArrayIntoChunks(data, 3);
    })
  }


}
