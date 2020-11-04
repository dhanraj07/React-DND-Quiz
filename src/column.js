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
    border: ${props => props.isDraggingOver && props.columnType==='answer' ? '2px solid #FFB800' : "2px dashed #000"}
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
    display: block;
    text-align:center;
`;
const PlaceHolder = styled.div`
    width: 90%;
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%,-50%);
`;

class Column extends React.Component {
    render() {
        return (
            <Container
            className={this.props.column.type}>
                <Droppable 
                    droppableId={this.props.column.id}
                    isDropDisabled={this.props.column.type === 'question' || this.props.tasks.length >= 1}>
                {(provided, snapshot) => (
                    <TaskList
                        innerRef={provided.innerRef}
                        {...provided.droppableProps}
                        isDraggingOver={snapshot.isDraggingOver}
                        column={this.props.column.id}
                        columnType={this.props.column.type}
                    >
                        {this.props.tasks.map((task, index) =>
                            <Task key={task.id}
                                task={task}
                                index={index}
                                column={this.props.column.id}
                                columnType={this.props.column.type}
                                activeDestination={this.props.activeDestination}
                                length={this.props.questionLength}
                            />)}
                        { (this.props.column.type === 'answer' && this.props.tasks.length < 1) ? 
                            <PlaceHolder>
                                {this.props.column.title}
                            </PlaceHolder> : null
                        }
                        {provided.placeholder}
                    </TaskList>
                )}
                </Droppable>
            </Container>
        )
    }
}

export default Column;