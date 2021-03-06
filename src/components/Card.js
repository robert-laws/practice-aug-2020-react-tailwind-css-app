import React from 'react';
import { Button, Task, Keyword } from './';

export const Card = ({ title, tasks, keywords }) => {
  return (
    <div className='w-96 border rounded overflow-hidden shadow-lg m-2 flex-auto'>
      <div>
        <div className='mb-2 border-b px-4 py-3'>
          <h4 className='text-gray-900 font-bold text-xl'>{title}</h4>
        </div>
        <div className='mb-2 border-b px-4 py-3'>
          {tasks.map((task, index) => (
            <Task key={index} title={task.title} completed={task.completed} />
          ))}
        </div>
        <div className='px-4 pb-3 w-full flex flex-col'>
          <p className='text-gray-500 text-base'>
            keywords:{' '}
            {keywords.map((keyword, index) => {
              if (keywords.length - 1 === index) {
                return <Keyword key={index} keyword={keyword} separator={''} />;
              } else {
                return (
                  <Keyword key={index} keyword={keyword} separator={', '} />
                );
              }
            })}
          </p>
          <div className='self-end'>
            <Button size='small'>Edit List</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
