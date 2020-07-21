import BaseComponent from "@/components/BaseComponent";
import Component from "vue-class-component";
import { version } from "./../../package.json";
import MDXWrapper from "@/components/internal/Documentation/MDXWrapper";

const routes = [
  {
    label: "Getting Started",
    path: "/getting-started",
    children: [],
  },
  {
    label: "Writing Components",
    path: "/writing-components",
    children: [],
  },
  {
    label: "PWA",
    path: "/pwa",
    children: [
      {
        label: "Getting Started",
        path: "/pwa/getting-started",
        children: [],
      },
    ],
  },
  {
    label: "Pattern-Library",
    path: "/pattern-library",
    children: [
      {
        label: "Getting Started",
        path: "/pattern-library/getting-started",
        children: [],
      },
      {
        label: "DevMode",
        path: "/pattern-library/dev-mode",
        children: [],
      },
    ],
  },
  {
    label: "Components",
    path: "/components",
    children: [
      {
        label: "Button",
        path: "/components/button",
        children: [],
      },
      {
        label: "Container",
        path: "/components/container",
        children: [],
      },
      {
        label: "Counter",
        path: "/components/counter",
        children: [],
      },
      {
        label: "Footer",
        path: "/components/footer",
        children: [],
      },
      {
        label: "Headline",
        path: "/components/headline",
        children: [],
      },
      {
        label: "Image",
        path: "/components/image",
        children: [],
      },
      {
        label: "Navigation",
        path: "/components/navigation",
        children: [],
      },
      {
        label: "NewsDetail",
        path: "/components/news-detail",
        children: [],
      },
      {
        label: "Quote",
        path: "/components/quote",
        children: [],
      },
      {
        label: "RichText",
        path: "/components/rich-text",
        children: [],
      },
      {
        label: "LineSeparator",
        path: "/components/line-separator",
        children: [],
      },
    ],
  },
];

@Component({
  name: "Documentation",
})
class Documentation extends BaseComponent {
  showSidebar = false;

  render() {
    console.log(this.$route);
    return (
      <div class="w-full min-h-full flex">
        <div class="md:w-1/3 lg:w-1/4 md:max-w-xs border-r border-gray-300 hidden md:block p-5">
          <div class="p-5 flex items-center">
            <span class="text-espirit text-2xl inline-block font-bold">
              FSXA-UI
            </span>
            <span class="bg-gray-900 px-2 rounded-lg inline-block ml-4 text-xs text-white leading-6 tracking-widest">
              {version}
            </span>
          </div>
          <ul class="mt-5 font-normal text-sm">
            {routes.map((route: any) => (
              <li class="">
                <router-link
                  to={route.path}
                  class="px-5 py-2 block mb-2"
                  activeClass="text-espirit"
                >
                  {route.label}
                </router-link>
                {route.children &&
                  this.$route.fullPath.indexOf(route.path) === 0 && (
                    <ul class="border-gray-200">
                      {route.children
                        .filter((child: any) => child.path !== "")
                        .map((child: any) => (
                          <li class="">
                            <router-link
                              to={child.route || child.path}
                              class="ml-5 px-5 py-2 block border-l-2"
                              activeClass="border-espirit text-espirit"
                            >
                              {child.label}
                            </router-link>
                          </li>
                        ))}
                    </ul>
                  )}
              </li>
            ))}
          </ul>
        </div>
        <div class="flex flex-1 min-h-full overflow-y-auto">
          <MDXWrapper>
            <router-view />
          </MDXWrapper>
        </div>
      </div>
    );
  }
}
export default Documentation;