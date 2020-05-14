import Vue from "vue";
import "./style.css";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { PropType } from "vue";
import { NavigationItemBase, NavigationProps } from "@/types/fsxa-ui";
import { TsxComponent } from "@/types";

@Component({
  name: "Navigation"
})
class Navigation<
  Item extends NavigationItemBase<Item> = any
> extends TsxComponent<NavigationProps<Item>> {
  @Prop({
    type: Array as PropType<NavigationProps<Item>["items"]>,
    required: true
  })
  items!: NavigationProps<Item>["items"];
  @Prop({ type: Function, required: true })
  handleNavClick!: NavigationProps<Item>["handleNavClick"];
  @Prop({ type: Function })
  isActiveItem: NavigationProps<Item>["isActiveItem"];
  @Prop({ type: Number, default: 3 }) depth!: number;

  renderItem(item: Item, currentDepth: number) {
    const isActive = this.isActiveItem ? this.isActiveItem(item) : false;
    return (
      <li class="navigation-item">
        <a
          class={`nav-link ${isActive ? "active" : ""}`}
          href="#"
          onClick={(event: any) => {
            event?.preventDefault();
            this.handleNavClick(item);
          }}
        >
          {item.label}
          {item.children && currentDepth < this.depth && (
            <ul class="navigation">
              {item.children.map(item =>
                this.renderItem(item as Item, currentDepth + 1)
              )}
            </ul>
          )}
        </a>
      </li>
    );
  }

  render() {
    return (
      <ul class="navigation">
        {this.items.map(item => this.renderItem(item, 0))}
      </ul>
    );
  }
}
export default Navigation;
