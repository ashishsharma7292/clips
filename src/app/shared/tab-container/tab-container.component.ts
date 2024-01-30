import { CommonModule } from '@angular/common';
import { AfterContentInit, Component, ContentChildren, QueryList} from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tab-container',
  standalone: true,
  imports: [
    CommonModule,
    TabComponent
  ],
  templateUrl: './tab-container.component.html',
  styleUrl: './tab-container.component.css'
})
export class TabContainerComponent implements AfterContentInit{

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent> = new QueryList()

  ngAfterContentInit():void
  {
    const activeTabs = this.tabs.filter(
      tab => tab.active
    )

    if(!activeTabs || activeTabs.length===0)
    {
      this.selectTab(this.tabs!.first)
    }
  }

  selectTab(tabs: TabComponent)
  {
    this.tabs?.forEach(tab => {
      tab.active=false;
    })

    tabs.active = true;

    return false
  }
}
