import EditableText from './Components/EditableTextComponent';
import Table from './Components/TableComponent';

function App() {
  const columns = [
    {
      title: 'Name',
      key: 'name',
    },
    {
      title: 'Age',
      key: 'age',
    },
    {
      title: 'Address',
      key: 'address',
    },
    {
      title: 'Test',
      key: 'aa',
    }
  ]

  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
      aa: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
      aa: '10 Downing Street',
    },
  ];

  return (
    <div className="App">
      <EditableText value='Editable text!' />
      <Table columns={columns} dataSource={dataSource} />
    </div>
  );
}

export default App;
