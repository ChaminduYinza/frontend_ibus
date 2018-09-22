export const config = {
  permissions: [
    {
      name: "Dashboard",
      icon: "pe-7s-graph",
      route: "/admin/home",
      class: "",
      value: [
        { name: "View Home Page", value: ["home-page"] }
      ]
    },
    {
      name: "Orders",
      icon: "pe-7s-shopbag",
      route: "/admin/orders",
      class: "",
      value: [
        { name: "View Orders", value: ["order-all", "order-get"] },
        { name: "Add Orders", value: ["order-new"] },
        { name: "Update Order Status", value: ["order-update"] }
      ]
    },
    {
      name: "Products",
      icon: "pe-7s-wallet",
      route: "/admin/viewProduct",
      class: "",
      value: [
        { name: "View Products", value: ["product-getAll"] },
        { name: "Create Products", value: ["product-new", "catagory-new", "catagory-all"] },
        { name: "Edit Products", value: ["product-edit", "product-get", "catagory-new", "catagory-all"] },
        { name: "Delete Products", value: ["product-delete"] },
        { name: "Import Products", value: ["product-amazon", "product-ebay", "catagory-new", "catagory-all"] }
      ]
    },
    {
      name: "Customers",
      icon: "pe-7s-users",
      route: "/admin/customers",
      class: "",
      value: [
        { name: "View Customers", value: ["customer-all"] },
        { name: "View Purchase", value: ["order-purchase"] },
        { name: "View Draft", value: ["cart-all"] },
      ]
    },
    {
      name: "V.A User",
      icon: "pe-7s-id",
      route: "/admin/viewVA",
      class: "",
      value: [
        { name: "View VA-Users", value: ["user-getVA"] },
        { name: "Create VA-Users", value: ["user-createVA"] },
        { name: "Update VA-Users", value: ["user-updateVA", "user-getUser"] },
        { name: "Delete VA-Users", value: ["user-remove"] },
      ]
    },

    {
      name: "Discounts",
      icon: "pe-7s-medal",
      route: "/admin/viewDiscounts",
      class: "",
      value: [
        { name: "View Discounts", value: ["discounts-create"] },
        { name: "Create Discounts", value: ["discounts-getAll"] },
        { name: "Delete Discounts", value: ["discounts-delete"] },
      ]
    },
    {
      name: "Online Store",
      icon: "pe-7s-look",
      route: "/admin/store",
      class: "",
      value: [
        { name: "View Store", value: ["store-find", "store-withUser"] },
        { name: "Create Store", value: ["store-create", "store-Available", "store-edit"] },
        { name: "Update Store", value: ["store-updateFeatures", "store-find"] },
      ]
    },
    {
      name: "Settings",
      icon: "pe-7s-config",
      route: "/admin/settings",
      class: "active-pro",
      value: [
        { name: "General", value: ["store-updateGeneral", "store-getGeneral"] },
        { name: "Files", value: ["store-updateFiles", "store-getFiles"] },
        { name: "Shipping", value: ["store-updateShipping", "store-getShipping"] },
        { name: "Checkout", value: ["store-updateCheckout", "store-getCheckut"] },
        { name: "Payment Providers", value: ["paypal-permission", "paypal-redirect", "paypal-isActivated"] },
        { name: "Account", value: ["user-getVA", "user-createVA"] },
        { name: "Taxes", value: ["store-updateFeatures", "store-find"] },
        { name: "Notifications", value: ["notification-create", "notification-edit", "notification-get", "notification-mailsend"] },
      ]
    },
  ],
}