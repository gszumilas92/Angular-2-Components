import { Component, OnInit, trigger, state, animate, transition, style } from '@angular/core';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.css'],
  animations: [
      trigger('visibility', [
        state('shown', style({
          opacity: 1,
          display: "block"
        })),
        state('hidden', style ({
          opacity: 0,
          display: "none"
        })),
        transition('* => *', animate('0.5s'))
      ])
    ]
})
export class DropdownMenuComponent implements OnInit {

  visibility  = []
  menu = ['About me', 'Experience', 'Portfolio', 'Contact'];
  subMenu = [
    [], 
    ['Flextronics', 'Ceva', 'VidaXL', 'XPO Logistics', 'Nabuurs'],
    ['Katarzyna Tołstych']
  ];

  constructor() { }

  ngOnInit() {
    //sub-menu animation
    this.menu.forEach(element => {
      this.visibility.push("hidden");
    });
  }

  dropdownToggle(i) { 
    this.visibility[i] = this.visibility[i] == 'shown' ? 'hidden' : 'shown';
  }

}