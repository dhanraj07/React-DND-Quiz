import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Task from './task';

const Container = styled.div`
    border-radius: 2px;
    display: flex;
    flex-direction: column;
    flex-basis: ${props => (props.className === 'question' ? '100%' : '50%')}
    max-width: ${props => (props.className === 'question' ? '100%' : '50%')}
    box-sizing: border-box;
    margin: ${props => (props.className === 'question' ? '0 1rem 1rem' : '0 0 1rem')}
`;

const TaskList = styled.div`
    transition: border-color 0.5s ease;
    border: 2px dashed white;
    border-color: ${props => (props.isDraggingOver ? props.dragColour : 'white')}
    background-color: ${props => (props.column === 'question' ? 'white' : 'transparent')}
    height: ${props => (props.column === 'question' ? '160px' : '100px')}
    overflow: hidden;
    box-sizing: border-box;
    position: relative;
    margin: .5rem;
    border-radius: 8px;
    font-size: 22px;
    cursor: pointer;
`;

class Column extends React.Component {
    render() {

        const dragColour = 'yellow';

        return (
            <Container
            className={this.props.column.id}
            border={dragColour}>
                <Droppable 
                    droppableId={this.props.column.id}
                    isDropDisabled={this.props.column.id === 'question'}>
                {(provided, snapshot) => (
                    <TaskList
                        innerRef={provided.innerRef}
                        {...provided.droppableProps}
                        isDraggingOver={snapshot.isDraggingOver}
                        dragColour={dragColour}
                        column={this.props.column.id}
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