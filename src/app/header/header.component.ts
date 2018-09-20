import {Component, OnInit} from '@angular/core';
import {InvidzService} from '../services/invidz.service';

@Component({
  selector: 'ck-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username = '';

  constructor(private invidzService: InvidzService) {
    console.log('HeaderComponent constrcutor');
  }

  ngOnInit() {
    console.log('HeaderComponent ngOnInit');
    this.invidzService.user$.subscribe(user => {
      if (user) {
        this.username = user.first_name + ' ' + user.last_name;
      } else {
        console.log('we need to load getMe')
        this.invidzService.getMe().subscribe();
      }
    });
  }

}
