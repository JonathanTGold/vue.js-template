export const menuItems = [
           {
               id: 1,
               label: "menuitems.menu.text",
               isTitle: true
           },
           {
               id: 2,
               label: "menuitems.dashboards.text",
               icon: "bx-home-circle",
               link: "/"
           },
           {
               id: 3,
               label: "menuitems.multilevel.text",
               icon: "bx-share-alt",
               subItems: [
                   {
                       id: 4,
                       label: "menuitems.multilevel.list.level1.1",
                       link: "javascript: void(0);",
                       parentId: 3
                   },
                   {
                       id: 5,
                       label: "menuitems.multilevel.list.level1.2",
                       parentId: 3,
                       subItems: [
                           {
                               id: 6,
                               label:
                                   "menuitems.multilevel.list.level1.level2.1",
                               link: "javascript: void(0);",
                               parentId: 5
                           },
                           {
                               id: 7,
                               label:
                                   "menuitems.multilevel.list.level1.level2.2",
                               link: "/level2.2",
                               parentId: 5
                           }
                       ]
                   }
               ]
           }
       ];
