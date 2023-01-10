import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogDetailService } from 'src/app/service/blog-detail.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {

  blogPost: any;
  blogPostcontent: any[] = [];
  path: string = "";

  constructor(private route: ActivatedRoute, public blogDetailService: BlogDetailService) { }

  ngOnInit(): void {
    this.path = this.route.snapshot.params['blogpostpath'];
    this.getDetail();
  }

 /**
   * Lấy về chi tiết 1 điểm đến và hiển thị lên giao diện
   *
   * @memberof DestinationPageComponent
   */
  getDetail(){
    this.blogDetailService.getByPath(this.path).subscribe((data: any) =>{
      this.blogPost = data;
      this.blogPostcontent = JSON.parse( data?.Content);
    })
  }

}
