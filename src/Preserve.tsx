import React from 'react';
import DualListBox from 'react-dual-listbox';
import { Form, FormGroup, Label, Input } from 'reactstrap';
/*const options1 = [
    {
        label: 'Earth',
        options: [
            { value: 'luna', label: 'Moon' },
        ],
    },
    {
        label: 'Mars',
        options: [
            { value: 'phobos', label: 'Phobos' },
            { value: 'deimos', label: 'Deimos' },
        ],
    },
    {
        label: 'Jupiter',
        options: [
            { value: 'io', label: 'Io' },
            { value: 'europa', label: 'Europa' },
            { value: 'ganymede', label: 'Ganymede' },
            { value: 'callisto', label: 'Callisto' },
        ],
    },
];*/
		
const options = [
    { value: '1', label: 'First Name' },
	{ value: '2', label: 'Last Name' },
    { value: '3', label: 'Username' },
	{ value: '4', label: 'Occupation' },
	{ value: '5', label: 'Address' },
	{ value: '6', label: 'Country' },
	{ value: '7', label: 'State' },
	{ value: '8', label: 'Language' },
	{ value: '9', label: 'Income' },
	{ value: '10', label: 'Organization' },
];


const CheckBoxCmp = ()=>{
	return(
		<Form>
			<FormGroup check inline>
				<Label check>
					<Input type="checkbox" /> Some input
				</Label>
			</FormGroup>
			<FormGroup check inline>
				<Label check>
					<Input type="checkbox" /> Some other
				</Label>
			</FormGroup>
			<FormGroup check inline>
				<Label check>
					<Input type="checkbox" /> Test input
				</Label>
			</FormGroup>
			<FormGroup check inline>
				<Label check>
					<Input type="checkbox" /> Some other input
				</Label>
			</FormGroup>
			<FormGroup check inline>
				<Label check>
					<Input type="checkbox" /> Some other input
				</Label>
			</FormGroup>
			<FormGroup check inline>
				<Label check>
					<Input type="checkbox" /> Some other input
				</Label>
			</FormGroup>
		</Form>
	);
}
class ListCmp extends React.Component {
    state = { selected: ['1','2','3'] };

    constructor(props:any) {
        super(props);

        this.onChange = this.onChange.bind(this);
    }

    onChange(selected:any) {
        this.setState({ selected });
    }

    render() {
        const { selected } = this.state;

        return (
			<>
            <DualListBox
                options={options}
                preserveSelectOrder
                selected={selected}
                showOrderButtons
                onChange={this.onChange}
				icons={{
					moveLeft: <span className="fa fa-chevron-left" />,
					moveAllLeft: [
						<span key={0} className="fa fa-chevron-left" />,
						<span key={1} className="fa fa-chevron-left" />,
					],
					moveRight: <span className="fa fa-chevron-right" />,
					moveAllRight: [
						<span key={0} className="fa fa-chevron-right" />,
						<span key={1} className="fa fa-chevron-right" />,
					],
					moveDown: <span className="fa fa-chevron-down" />,
					moveUp: <span className="fa fa-chevron-up" />,
				}}
            />		
			
			</>
        );
    }
}

const PreserveSelectOrderExample = ()=>{
	return(
		<>
			<ListCmp />
			<br />
			<CheckBoxCmp />
		</>
	)
}
export default PreserveSelectOrderExample;