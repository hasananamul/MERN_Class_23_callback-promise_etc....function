class Alert {
  static danger(alert_msg) {
    return ` <div class="alert alert-danger alert-dismissible fade show">
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>

  ${alert_msg}
  </div>

`;
  }
  static warning(alert_msg) {
    return ` <div class="alert alert-warning alert-dismissible fade show">
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>

  ${alert_msg}
  </div>
  
`;
  }

  static success(alert_msg) {
    return `
  <div class="alert alert-success alert-dismissible fade show">
  <button type="button" class="btn-close" data-bs-dismiss="alert" ></button>
  ${alert_msg}
  </div>
  
`;
  }
}
export default Alert;
