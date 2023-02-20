export function Layout(props) {

  return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh'
    }}>
        {props.children}
    </div>
  );
}
