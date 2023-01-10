import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    BlogHomeComponent,
    BlogPostComponent,
    BlogDetailComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule
  ]
})
export class BlogModule { }
