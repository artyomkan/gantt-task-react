import React from 'react';
import {StoryObj} from '@storybook/react';
import {Gantt} from "../components/gantt/gantt"
import {ViewMode} from "../types/public-types";

export default {
  title: 'Example/Gantt',
}

type Story = StoryObj

export const MainModal: Story = {
  render: () => {
    return (
      <Gantt viewMode={ViewMode.Day} tasks={[{
        start: new Date(2020, 1, 1),
        end: new Date(2020, 1, 2),
        name: {
          text: "Task 1Task 1Task 1Task 1",
          render: () => <div><button>123</button></div>
        },
        id: 'Task 0',
        type:'task',
        progress: 45,
        isDisabled: true,
        styles: { progressColor: '#ffbb54', progressSelectedColor: '#ff9e0d' },
      }]} />
    );
  },
};

/*
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { GanttTask } from "../GanttTask"; // импортируй компонент

export default {
  title: "GanttTask",
  component: GanttTask,
} as ComponentMeta<typeof GanttTask>;

const Template: ComponentStory<typeof GanttTask> = (args) => <GanttTask {...args} />;

export const Default = Template.bind({});
Default.args = {
  // сюда можно передавать пропсы для компонента
};
 */
