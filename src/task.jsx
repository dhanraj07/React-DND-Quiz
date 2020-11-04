import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    // z-index: ${props => props.length - props.index};
    z-index: 1;
    text-align: center;
    padding: 8px;
    border-radius: 8px;
    display: flex;
    color: #233D93;
    position: ${props => props.isDragDisabled ? 'relative' : 'absolute'};
    box-sizing: border-box;
    height: 100%;
    top: 0;
    transform: ${props => props.isDragDisabled ? 'none!important' : 'translate(0%,0%)'};
    // width: ${props => props.active && props.isDragging ? '200px!important' : '100%'};
    width: 100%;
    background-color: ${props => props.isDragDisabled ? '#FFB800' : props.isDragging ? 'rgba(255, 184, 0, 0.5)' : '#FFB800'};
    p {
        margin-top: 0;
        font-size: 26px;
    }
    span {
        color: #16A0DC;
        font-size: 16px;
    }
`;


class Task extends React.Component {
    render() {

        const match = this.props.length !== (this.props.index + 1);

        const isDragDisabled = this.props.columnType === 'answer';

        const active = this.props.task.id === this.props.activeDestination.id &&
        this.props.activeDestination.destination === 'correct'
        || this.props.activeDestination.destination === 'incorrect';

        const cardNo = this.props.task.id.slice(5, this.props.task.id.length);

        return (
            <Draggable
            draggableId={this.props.task.id}
            index={this.props.index} 
            isDragDisabled={isDragDisabled}>
            {(provided, snapshot) => (
                <Container
                    className={active && snapshot.isDragging ? 'active' : null}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    innerRef={provided.innerRef}
                    isDragging={snapshot.isDragging}
                    isDragDisabled={isDragDisabled}
                    active={active}
                    index={cardNo}
                    length={this.props.length}
                >
                    <div className="cardDetails">
                        <p>{this.props.task.content}</p>
                    </div>
                </Container>
            )}
            </Draggable>
        );
    }
};

export default Task;