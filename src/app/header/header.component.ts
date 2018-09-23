import {Component, OnInit} from '@angular/core';
import {InvidzService} from '../services/invidz.service';
import {getUser, RootState} from '../reducers/index';
import {select, Store} from '@ngrx/store';

@Component({
  selector: 'ck-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username = '';

  constructor(private invidzService: InvidzService, private store: Store<RootState>) {
    console.log('HeaderComponent constrcutor');
  }

  ngOnInit() {
    console.log('HeaderComponent ngOnInit');
    this.store.pipe(select(getUser)).subscribe(user => {
      if (user) {
        this.username = user.first_name + ' ' + user.last_name;
      } else {
        console.log('we need to load getMe')
        this.invidzService.getMe().subscribe();
      }
    });
  }

}
