import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BlogDetailService } from 'src/app/service/blog-detail.service';
import { BlogService } from 'src/app/service/blog.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {
  blog: any ;
  path: string = "";
  
  /**
   * Danh sách các blog
   *
   * @type {any[]}
   * @memberof BlogDetailComponent
   */
  blogDetails: any[] = [];
  blogDetail: any = {};
  constructor(public translate: TranslateService, public blogService: BlogService, private route: ActivatedRoute, public blogDetailService: BlogDetailService) { }
  ngOnInit(): void {
    this.path = this.route.snapshot.params['blogpath'];
    this.getBlog();
    this.getBlogDetailList();
  }
 
  /**
   * Lấy về chi tiết 1 blog và hiển thị lên giao diện
   *
   * @memberof BlogDetailComponent
   */
  getBlog(){
    this.blogService.getByPath(this.path).subscribe((data: any) =>{
      this.blog = data;
    })
  }

  
  /**
   * Lấy về danh sách các blog post để hiển thị lên giao diện
   *
   * @memberof BlogDetailComponent
   */
  getBlogDetailList(){
    this.blogDetailService.getList(this.path).subscribe((data: any)=>{
      this.blogDetail = data.shift();
      this.blogDetails = this.blogDetailService.splitArrayIntoChunks(data, 3);
    })
  }

}
