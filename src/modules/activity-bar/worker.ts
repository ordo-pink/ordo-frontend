/* eslint-disable no-restricted-globals */
const activities = [
  {
    path: "/",
    name: "activities.activity.editor.name",
    description: "activities.activity.editor.description",
    icon: "HiOutlineDocumentText",
  },
  {
    path: "/graph",

    name: "activities.activity.graph.name",
    description: "activities.activity.graph.description",
    icon: "HiOutlineShare",
  },
  {
    path: "/checkboxes",
    name: "activities.activity.checkboxes.name",
    description: "activities.activity.checkboxes.description",
    icon: "HiOutlineCheckCircle",
  },
  {
    path: "/finder",
    name: "activities.activity.finder.name",
    description: "activities.activity.finder.description",
    icon: "HiOutlineSearch",
  },
  {
    path: "/folders",
    name: "activities.activity.folders.name",
    description: "activities.activity.folders.description",
    icon: "HiOutlineFolderOpen",
  },
];

self.postMessage(activities);

export {};
