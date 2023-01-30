import './styles.css'

export function Exhibit(props) {
  return (
    <div class="exhibit-container">
      <div class="exhibit-header">
        <span class="exhibit-header-title">Dashboard</span>
      </div>
      <div class="exhibit-background">
        <div class="exhibit">{props.children}</div>
      </div>
    </div>
  );
}