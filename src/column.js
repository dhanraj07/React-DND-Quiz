import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Task from './task';

const Container = styled.div`
    border-radius: 2px;
    display: flex;
    flex-direction: column;
    flex-basis: 25%;
    max-width: 25%;
    box-sizing: border-box;
    margin: 0 auto;
`;

const TaskList = styled.div`
    transition: border-color 0.5s ease;
    border: 2px dashed white;
    border-color: ${props => (props.isDraggingOver ? props.dragColour : 'white')}
    background-color: transparent;
    height: 160px;
    overflow: hidden;
    box-sizing: border-box;
    position: relative;
    margin: .5rem;
    border-radius: 8px;
    font-size: 22px;
    cursor: pointer;
    max-width:100%;
`;

class Column extends React.Component {
    render() {

        const dragColour = 'yellow';

        return (
            <Container
            className={this.props.column.type}
            border={dragColour}>
                <Droppable 
                    droppableId={this.props.column.id}
                    isDropDisabled={this.props.column.type === 'question'}>
                {(provided, snapshot) => (
                    <TaskList
                        innerRef={provided.innerRef}
                        {...provided.droppableProps}
                        isDraggingOver={snapshot.isDraggingOver}
                        dragColour={dragColour}
                        column={this.props.column.id}
                        columnType={this.props.column.type}
                    >
                        {this.props.tasks.map((task, index) =>
                            <Task key={task.id}
                                task={task}
                                index={index}
                                column={this.props.column.id}
                                activeDestination={this.props.activeDestination}
                                length={this.props.questionLength}
                            />)}
                        {provided.placeholder}
                    </TaskList>
                )}
                </Droppable>
            </Container>
        )
    }
}

export default Column;