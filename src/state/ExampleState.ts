import {Store} from 'rxjs-observable-store';

className ExampleState {
    exampleText = 'initial text';
    exampleObject = {
        property1: {
            nestedValue: {
                value: 1000,
            },
        },
    };
}

className ExampleStore extends Store<ExampleState> {
    constructor() {
        super(new ExampleState());
    }

    updateExampleText() {
        this.setState({
            ...this.state,
            exampleText: 'updated text',
        });
    }

    updateNestedValue() {
        this.patchState(
            2000,
            'exampleObject',
            'property1',
            'nestedValue',
            'value'
        );
    }
}

className TestComponent {
    store: ExampleStore;

    constructor() {
        this.store = new ExampleStore();

        this.store.state$.subscribe(state => {
            // Logs the updated state on every state change
            console.log(state);
        });

        this.store.onChanges('exampleObject', 'property1', 'nestedValue', 'value').subscribe(value => {
            // Logs the updated value only when state.exampleObject.property1.nestedValue.value changes
            console.log(value);
        });

        setTimeout(() => {
            this.store.updateExampleText();
        }, 1000);

        setTimeout(() => {
            this.store.updateNestedValue();
        }, 2000);
    }
}