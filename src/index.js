import React from 'react';
import ReactDOM from 'react-dom';
import '@atlaskit/css-reset';
import styled from 'styled-components';
import { DragDropContext } from 'react-beautiful-dnd';
import initialData from './initial-data';
import Column from './column';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    padding: 0 1rem;
    max-width: 800px;
`;

document.body.style.backgroundColor = '#ffe9c9';

class App extends React.Component {
    state = {
        initialData,
        activeDestination: {}
    };

    onDragEnd = result => {
        const { destination, source, draggableId } = result;

        if (!destination || destination.droppableId === source.droppableId) {
            return;
        }

        const start = this.state.initialData.slots.find(slot => slot.id === source.droppableId);
        const finish = this.state.initialData.slots.find(slot => slot.id === destination.droppableId);

        if (start.id !== finish.id) {
            this.updateCards(start, finish, draggableId);
        } else {
            return;
        }


    }

    updateAnswer = () => {
        const answerData = this.state.initialData.slots.filter(slot => slot.type === 'slot').map(slot => slot.contains);
        const isSubmitEnable = !answerData.includes(null);
        this.setState({
            initialData: {
                ...this.state.initialData,
                answers: answerData,
                isSubmitEnable: isSubmitEnable
            }
        });
        console.log('Final Answer:', answerData);
        console.log('Can Submit:', isSubmitEnable);
    }

    updateCards = (start, finish, draggableId) => {

        // Moving from one list to another
        const newStart = {
            ...start,
            contains: null,
        }

        const newFinish = {
            ...finish,
            contains: draggableId
        };

        const newArrayItems = [newStart,newFinish];

        const newSlotsData = this.state.initialData.slots.map(obj => newArrayItems.find(o => o.id === obj.id) || obj);

        const newState = {
            ...this.state.initialData,
            slots:newSlotsData
        }

        this.setState({initialData: newState});

        this.updateAnswer();
    }

    onDragUpdate = result => {

        // Check if there is a destination then check if it's correct
        if (result.destination) {
            this.setState({
                activeDestination: {
                    id: result.draggableId,
                    destination: result.destination.droppableId
                }
            })
        }
    }

    onDragStart = () => {
        console.log('started dragging');
    }

    render() {

        const optionsLength = this.state.initialData.options.length;

        return (
            <DragDropContext 
                onDragEnd={this.onDragEnd}
                onDragStart={this.onDragStart}
                onDragUpdate={this.onDragUpdate}
                >
                <Container>
                    {this.state.initialData.slots.map((column) => {
                        const option = this.state.initialData.options.find(option=> option.id === column.contains);
                        const tasks = option ? [option] : [];

                        return <Column
                            key={column.id}
                            column={column}
                            tasks={tasks}
                            activeDestination={this.state.activeDestination} 
                            optionsLength={optionsLength}/>;
                    })}
                </Container>
            </DragDropContext>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
