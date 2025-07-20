<template>
  <div class="content-page">
    <header class="page-header">
      <div class="container">
        <h1 class="page-title">Examples Gallery</h1>
        <p class="page-subtitle">Coming soon...</p>
      </div>
    </header>
    
    <main class="page-content">
      <div class="container">
        
          <div class="content-section">
            <h2>E-commerce Platform</h2>
            <p>Complete shopping system with user management, product catalog, and payment processing:</p>
            <APMLCodeBlock :code="ecommerceExample" />
          </div>
          
          <div class="content-section">
            <h2>Business Analytics Dashboard</h2>
            <p>Real-time analytics with data visualization and reporting:</p>
            <APMLCodeBlock :code="dashboardExample" />
          </div>
          
          <div class="content-section">
            <h2>Social Media Platform</h2>
            <p>User-generated content platform with feeds, interactions, and moderation:</p>
            <APMLCodeBlock :code="socialExample" />
          </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import APMLCodeBlock from '../components/APMLCodeBlock.vue'

const loading = ref(false)

const ecommerceExample = ref(`app EcommerceStore:
  title: "Modern E-commerce Platform"
  description: "Full-featured online store with payments and inventory"
  version: 2.0
  apml_specification_version: "0.9.0"
  
data Product:
  id: unique_id
  name: text required
  description: text required
  price: money required
  category: electronics | clothing | books | home
  stock_quantity: number required
  images: list of url
  rating: number default 0
  reviews: list of Review
  
data User:
  id: unique_id
  email: email unique required
  name: text required
  shipping_address: text required
  payment_methods: list of PaymentMethod
  order_history: list of Order
  
data Order:
  id: unique_id
  user_id: unique_id required
  items: list of OrderItem
  total_amount: money required
  status: pending | processing | shipped | delivered
  created_at: timestamp auto
  
interface store_front:
  show product_catalog:
    for each product in products:
      display product_card:
        image: product.images[0]
        name: product.name
        price: product.price
        rating: product.rating
        
  display shopping_cart:
    cart_items: list of selected_products
    subtotal: calculate_cart_total()
    shipping_cost: $9.99
    total: subtotal + shipping_cost
    
  show checkout_flow:
    payment_form: secure payment processing
    shipping_details: address and delivery options
    order_confirmation: receipt and tracking
    
logic ecommerce_operations:
  when user adds_product_to_cart:
    validate product.stock_quantity > 0
    add product to user.cart
    update cart_display
    show success_message
    
  when user places_order:
    validate payment_details
    process payment_transaction
    if payment_successful:
      create order_record
      reduce product.stock_quantity
      send confirmation_email
      trigger fulfillment_workflow
      
  process inventory_management:
    monitor stock_levels
    when product.stock_quantity < 5:
      notify inventory_team
      suggest reorder_quantity`)

const dashboardExample = ref(`app BusinessDashboard:
  title: "Executive Analytics Dashboard"
  description: "Real-time business metrics and KPI visualization"
  version: 1.5
  apml_specification_version: "0.9.0"
  
data Metric:
  id: unique_id
  name: text required
  current_value: number required
  target_value: number required
  unit: currency | percentage | count | time
  trend: increasing | decreasing | stable
  last_updated: timestamp auto
  
data Report:
  id: unique_id
  title: text required
  type: sales | marketing | operations | financial
  time_period: daily | weekly | monthly | quarterly
  data_points: list of number
  insights: list of text
  
interface executive_dashboard:
  show key_metrics_overview:
    display revenue_card:
      current_revenue: $247,890
      target_revenue: $300,000
      progress_percentage: 82.6%
      trend: increasing
      
    display customer_metrics:
      new_customers_today: 47
      customer_retention_rate: 94.2%
      customer_lifetime_value: $1,847
      
  display sales_analytics:
    revenue_chart: interactive line graph
    conversion_funnel: step-by-step visualization
    top_products: ranked product performance
    regional_breakdown: geographic heatmap
    
  show real_time_alerts:
    when metric exceeds_threshold:
      display alert_notification
      suggest corrective_actions
      
logic analytics_engine:
  process real_time_data:
    collect data from sales_system
    collect data from marketing_platform
    collect data from customer_support
    aggregate metrics
    calculate trends
    
  when new_data_received:
    update dashboard_displays
    check alert_thresholds
    if threshold_exceeded:
      trigger notification_system
      log alert_event
      
  calculate business_insights:
    revenue_growth = (current_month - previous_month) / previous_month * 100
    customer_acquisition_cost = marketing_spend / new_customers
    return_on_investment = (revenue - costs) / costs * 100`)

const socialExample = ref(`app SocialMediaPlatform:
  title: "Community Social Network"
  description: "User-generated content platform with feeds and interactions"
  version: 3.2
  apml_specification_version: "0.9.0"
  
data User:
  id: unique_id
  username: text unique required
  email: email unique required
  bio: text optional
  avatar: url optional
  followers: list of User
  following: list of User
  posts: list of Post
  
data Post:
  id: unique_id
  author: User required
  content: text required
  images: list of url optional
  likes: list of User
  comments: list of Comment
  created_at: timestamp auto
  visibility: public | friends_only | private
  
data Comment:
  id: unique_id
  post_id: unique_id required
  author: User required
  content: text required
  likes: list of User
  created_at: timestamp auto
  
interface social_feed:
  show news_feed:
    for each post in user.timeline:
      display post_card:
        author_info: post.author.username and avatar
        post_content: post.content
        engagement_stats: likes and comments count
        action_buttons: like, comment, share
        
  display create_post_form:
    content_textarea: "What's on your mind?"
    media_upload: image and video support
    privacy_selector: public | friends_only | private
    post_button: publish to timeline
    
  show user_interactions:
    notifications: likes, comments, follows
    direct_messages: private conversations
    friend_requests: pending connections
    
logic social_mechanics:
  when user creates_post:
    validate content is not empty
    check for inappropriate_content
    if content_approved:
      save to database
      add to followers_timeline
      trigger notification_system
      
  when user likes_post:
    add user to post.likes
    notify post.author
    update engagement_metrics
    
  process content_moderation:
    scan new_posts for spam
    detect inappropriate_language
    flag suspicious_activity
    when violation_detected:
      hide content
      notify moderation_team
      
  calculate engagement_metrics:
    daily_active_users = count users with activity today
    average_session_time = total_time / user_sessions
    content_engagement_rate = (likes + comments) / total_posts`)

onMounted(() => {
  console.log('Examples Gallery page loaded')
})
</script>

<style scoped>
.content-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  color: #f8fafc;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.page-header {
  padding: 6rem 0 4rem;
  text-align: center;
  border-bottom: 1px solid #334155;
}

.page-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.page-subtitle {
  font-size: 1.25rem;
  color: #cbd5e1;
  margin: 0;
}

.page-content {
  padding: 4rem 0;
}

.content-section {
  background: rgba(51, 65, 85, 0.3);
  border: 1px solid #334155;
  border-radius: 1rem;
  padding: 3rem;
  margin-bottom: 2rem;
}

.content-section h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #f8fafc;
}

.content-section p {
  color: #cbd5e1;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }
  
  .page-header {
    padding: 4rem 0 2rem;
  }
}
</style>