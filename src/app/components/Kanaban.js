// components/KanbanBoard.js
'use client';
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { FaCalendarAlt, FaCommentDots } from 'react-icons/fa';
import Header from './Header';
import Sidebar from './Sidebar';

const initialData = {
  todo: [
    { id: '1', title: 'Follow up with John Doe', dueDate: 'Tomorrow', comments: 1, tag: 'High Priority' },
    { id: '2', title: 'Send proposal to Jane Smith', dueDate: 'Jun 15, 2024', comments: 3, tag: 'Proposal' },
  ],
  inProgress: [
    { id: '3', title: 'Discuss requirements with Bob Johnson', dueDate: 'Today', comments: 2, tag: 'Discussion' },
    { id: '4', title: 'Prepare demo for Alice Brown', dueDate: 'Jun 16, 2024', comments: 1, tag: 'Demo' },
  ],
  inReview: [
    { id: '5', title: 'Review contract with Carol Davis', dueDate: 'Jun 17, 2024', comments: 2, tag: 'Contract' },
    { id: '6', title: 'Evaluate project with Dave Wilson', dueDate: 'Jun 18, 2024', comments: 1, tag: 'Evaluation' },
  ],
  done: [
    { id: '7', title: 'Close deal with Eve Adams', dueDate: 'Jun 19, 2024', comments: 0, tag: 'Closed' },
  ],
};

const KanbanBoard = () => {
  const [data, setData] = useState(initialData);

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId && source.index === destination.index) {
      return;
    }

    const sourceColumn = data[source.droppableId];
    const destColumn = data[destination.droppableId];
    const sourceItems = [...sourceColumn];
    const destItems = [...destColumn];
    const [removed] = sourceItems.splice(source.index, 1);

    destItems.splice(destination.index, 0, removed);

    setData({
      ...data,
      [source.droppableId]: sourceItems,
      [destination.droppableId]: destItems,
    });
  };

  const renderCard = (card, index) => (
    <Draggable key={card.id} draggableId={card.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="bg-white p-4 rounded-lg border mb-4"
        >
          <h3 className="font-semibold text-gray-900 mb-2">{card.title}</h3>
          <div className="text-gray-500 text-sm mb-2 flex items-center">
            <FaCalendarAlt className="mr-2" /> {card.dueDate}
          </div>
          <div className="text-gray-500 text-sm mb-2 flex items-center">
            <FaCommentDots className="mr-2" /> {card.comments} Comments
          </div>
          <span className="inline-block px-2 py-1 text-xs font-semibold text-purple-800 bg-purple-200 rounded-full">
            {card.tag}
          </span>
        </div>
      )}
    </Draggable>
  );

  const renderColumn = (columnId, columnName, items) => (
    <Droppable droppableId={columnId} key={columnId}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps} className="p-4 bg-gray-100 rounded-lg border w-full">
          <h2 className="font-semibold text-lg mb-4">{columnName}</h2>
          {items.map((item, index) => renderCard(item, index))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-grow">
        <Sidebar />
        <main className="flex-grow p-5" style={{ marginLeft: '200px' }}>
          <h1 className="text-2xl font-bold text-black mb-6">Follow Up</h1>
          <DragDropContext onDragEnd={onDragEnd}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {renderColumn('todo', 'To Do', data.todo)}
              {renderColumn('inProgress', 'In Progress', data.inProgress)}
              {renderColumn('inReview', 'In Review', data.inReview)}
              {renderColumn('done', 'Done', data.done)}
            </div>
          </DragDropContext>
        </main>
      </div>
    </div>
  );
};

export default KanbanBoard;
