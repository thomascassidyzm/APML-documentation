# APML v2.0.0 Language Specification

**Version**: 2.0.0
**Status**: Production Ready
**Date**: 2025-12-05

---

## 1. Introduction

### 1.1 What is APML?

APML (AI Project Markup Language) is a declarative specification language for expressing application intent in a way that:

1. **Humans can read and validate** - Natural language-like syntax
2. **AI agents can parse and implement** - Structured enough for machine processing
3. **Compilers can deterministically transform** - Generates framework-specific code

APML bridges the gap between human intent and executable code, enabling rapid application development through human-AI collaboration.

### 1.2 Design Principles

**Trinity Principle**: Every specification must cover three message flows:
- **System-to-User**: What the system shows (UI, feedback, notifications)
- **User-to-System**: What users can do (clicks, inputs, gestures)
- **System-to-System**: Internal operations (logic, API calls, data transformations)

**Conservation Physics**: Intent is preserved across transformations:
- Core functionality remains identical across platforms
- Context adapts to platform capabilities
- Essential user experience is maintained

**Collaborative Intelligence**: Human-AI partnership:
- Human provides creative direction and domain knowledge
- AI provides systematic implementation and pattern recognition
- Emergent solutions exceed individual capabilities

---

## 2. Core Syntax

### 2.1 Application Declaration

Every APML file begins with an app declaration:

```apml
app ApplicationName:
  title: "Human-readable title"
  description: "What this application does"
  version: "1.0.0"
  apml_version: "2.0.0"
```

**Required Fields**:
- `title` - Display name for the application
- `description` - Brief purpose statement
- `version` - Semantic version of the application
- `apml_version` - APML specification version used

---

## 3. Data Models

### 3.1 Basic Model Definition

```apml
data ModelName:
  field_name: type modifiers
  another_field: type modifiers
```

### 3.2 Primitive Types

| Type | Description | Example Values |
|------|-------------|----------------|
| `text` | String values | "Hello World" |
| `number` | Numeric (integer or decimal) | 42, 3.14 |
| `boolean` | True/false | true, false |
| `date` | Date without time | 2025-12-05 |
| `timestamp` | Date with time | 2025-12-05T10:30:00Z |
| `email` | Email address (validated) | user@example.com |
| `url` | URL (validated) | https://example.com |
| `unique_id` | UUID or auto-generated ID | uuid-v4 |
| `money` | Currency value | $10.50 |
| `percentage` | Percentage value | 75.5% |

### 3.3 Type Modifiers

| Modifier | Description |
|----------|-------------|
| `required` | Field must have a value |
| `optional` | Field may be null |
| `default: value` | Default value if not provided |
| `unique` | Value must be unique across records |
| `auto` | Auto-generated (timestamps, IDs) |
| `list` | Array of the type |

### 3.4 Collections

```apml
tags: list of text
items: list of ItemModel
```

### 3.5 Relationships

```apml
data Post:
  title: text required
  author_id: unique_id required

  relationships:
    belongs_to: User via author_id
    has_many: Comment
```

**Relationship Types**:
- `belongs_to` - Many-to-one relationship
- `has_many` - One-to-many relationship
- `has_one` - One-to-one relationship

---

## 4. Interface Sections

### 4.1 Basic Interface

```apml
interface section_name:
  show element_name:
    property: value
```

### 4.2 Display Elements

| Element | Description |
|---------|-------------|
| `show` | Display a UI element |
| `display` | Alias for show |
| `hide` | Conditionally hide element |

### 4.3 Conditionals

```apml
# If/else pattern
if condition:
  show element_a
else:
  show element_b

# When pattern (declarative)
when state equals "active":
  show active_indicator
```

### 4.4 Iteration

```apml
for each item in items:
  show item_card:
    title: item.name
    description: item.description
```

---

## 5. Computed Values

Computed values are reactive expressions that automatically update when dependencies change.

### 5.1 Simple Syntax

```apml
computed property_name: expression
```

### 5.2 Full Syntax

```apml
computed property_name:
  value: expression
  format: format_type
  cache: boolean
```

### 5.3 Examples

```apml
# Filtered list
computed filtered_posts: posts.filter(p => p.category == selected_category)

# Aggregate
computed total_likes: posts.sum(p => p.likes_count)

# Formatted percentage
computed ftc_percentage:
  value: (correct_first_time / total_attempts) * 100
  format: percentage

# Currency formatting
computed cost_estimate:
  value: tokens * rate_per_token
  format: currency

# Cached expensive calculation
computed mastery_level:
  value: weighted_average(recent_scores, decay: 0.9)
  cache: true
```

### 5.4 Format Types

| Format | Output Example |
|--------|----------------|
| `percentage` | 75.5% |
| `currency` | $10.50 |
| `number` | 1,234.56 |
| `date` | Dec 5, 2025 |
| `timestamp` | Dec 5, 2025 10:30 AM |
| `duration` | 2h 30m |

### 5.5 Behavior

- **Auto-tracked dependencies**: Framework detects which values the computed depends on
- **Lazy evaluation**: Only recomputed when accessed and dependencies changed
- **Cached by default**: Result cached until dependencies change
- **Composable**: Can be used in templates, other computed values, or logic blocks

---

## 6. Logic Sections

### 6.1 Process Definition

```apml
logic section_name:
  process process_name:
    when trigger_condition:
      action_1
      action_2
      if condition:
        action_3
```

### 6.2 Triggers

| Trigger | Description |
|---------|-------------|
| `when user clicks element` | Click interaction |
| `when user submits form` | Form submission |
| `when user types in field` | Input change |
| `when data changes` | Reactive data change |
| `when page loads` | Component mount |
| `when timer expires` | Scheduled event |

### 6.3 Actions

| Action | Description |
|--------|-------------|
| `create ModelName with { field: value }` | Create record |
| `update record with { field: value }` | Update record |
| `delete record` | Delete record |
| `navigate to page` | Route navigation |
| `show notification` | Display notification |
| `send email` | Email action |
| `call api` | API request |

### 6.4 Calculations

```apml
calculate calculation_name:
  input: field_a, field_b
  return: field_a + field_b
```

### 6.5 Validations

```apml
validate validation_name:
  check condition_1:
    error: "Error message if fails"
  check condition_2:
    error: "Another error message"
```

---

## 7. Optimistic Updates

Optimistic updates provide instant UI feedback before server confirmation.

### 7.1 Syntax

```apml
process action_name:
  when trigger:
    optimistic:
      # Immediate UI updates
      state_update_1
      state_update_2

    # Server sync
    call api endpoint_name with params

    on_error:
      rollback  # Reverts all optimistic updates
      show notification "Error message"

    on_success:
      show notification "Success message"
```

### 7.2 Example - Social Media Like

```apml
process like_post:
  when user clicks like_button on post:
    optimistic:
      increment post.likes_count by 1
      set post.is_liked to true
      animate like_button with heart_pop

    call api like_post with { post_id: post.id }

    on_error:
      rollback
      show notification "Failed to like post"
```

### 7.3 Behavior

- State changes in `optimistic` block apply immediately
- Subsequent API calls happen in background
- `rollback` reverts ALL optimistic mutations on error
- Framework tracks all mutations for automatic rollback

---

## 8. State Machines

State machines model discrete states with explicit transitions.

### 8.1 Syntax

```apml
state_machine machine_name:
  states: [state1, state2, state3]
  initial: state1

  transitions:
    from state1 to state2:
      when: condition
      action: what_to_do

    from state2 to state3:
      when: another_condition
      cooldown: duration
      action: what_to_do
```

### 8.2 Properties

| Property | Description |
|----------|-------------|
| `states` | All possible states (required) |
| `initial` | Starting state (required) |
| `from X to Y` | Explicit state transition |
| `when` | Guard condition |
| `action` | Side effects during transition |
| `cooldown` | Minimum time before transition can fire again |

### 8.3 Example - Authentication Flow

```apml
state_machine auth_flow:
  states: [anonymous, authenticating, authenticated, error]
  initial: anonymous

  transitions:
    from anonymous to authenticating:
      when: user clicks login_button
      action: show loading_spinner

    from authenticating to authenticated:
      when: auth_success
      action:
        hide loading_spinner
        redirect to dashboard
        show notification "Welcome back!"

    from authenticating to error:
      when: auth_failed
      action:
        hide loading_spinner
        show error_message
```

### 8.4 Example - Learning Progression with Cooldown

```apml
state_machine question_mastery:
  states: [new, learning, familiar, practiced, mastered]
  initial: new

  transitions:
    from learning to familiar:
      when: accuracy >= 0.7 and attempts >= 10
      cooldown: 24 hours
      action: celebrate "Getting familiar!"

    from practiced to mastered:
      when: accuracy >= 0.9 and total_attempts >= 50
      cooldown: 7 days
      action:
        celebrate "Mastered!"
        update leaderboard
```

### 8.5 Behavior

- Only one state active at a time
- Transitions only occur when `when` condition is met
- If multiple transitions match, first declared wins
- Invalid transitions are ignored
- Actions execute during transition (after leaving old state, before entering new)

---

## 9. Real-time Connections

Real-time connections enable persistent WebSocket communication.

### 9.1 Syntax

```apml
realtime connection_name:
  url: "wss://api.example.com/ws"

  on_connected:
    action_to_perform

  on_disconnected:
    action_to_perform

  subscribe channel_name:
    filter: condition
    on_message(event_data):
      action_with_event_data

  heartbeat: duration
  reconnect_policy: strategy
```

### 9.2 Properties

| Property | Description |
|----------|-------------|
| `url` | WebSocket URL (wss:// or ws://) |
| `on_connected` | Actions when connection established |
| `on_disconnected` | Actions when connection lost |
| `subscribe` | Subscribe to a channel/topic |
| `filter` | Optional condition to filter messages |
| `on_message` | Handler for incoming messages |
| `heartbeat` | Keepalive interval |
| `reconnect_policy` | How to handle reconnection |

### 9.3 Reconnect Policies

| Policy | Description |
|--------|-------------|
| `exponential_backoff` | Exponential backoff strategy |
| `exponential_backoff(max: duration)` | With maximum delay |
| `fixed_interval(N seconds)` | Fixed retry interval |
| `none` | No automatic reconnection |

### 9.4 Example - Live Feed

```apml
realtime feed_stream:
  url: "wss://stream.x.com/timeline"

  on_connected:
    show connection_indicator
    sync pending_updates

  subscribe "home_timeline":
    on_message(new_post):
      prepend new_post to posts
      show new_posts_indicator
      play notification_sound

  subscribe "notifications":
    filter: notification.type in [mention, reply, like]
    on_message(notification):
      increment notification_badge
      show notification_toast

  heartbeat: 30 seconds
  reconnect_policy: exponential_backoff(max: 5 minutes)
```

---

## 10. Virtualized Lists

Virtualized lists efficiently render large or infinite collections.

### 10.1 Syntax

```apml
show virtualized_list list_name:
  items: data_source
  item_height: estimated Npx
  overscan: N

  pagination:
    strategy: cursor | offset
    load_more: trigger_condition

  on scroll_near_end(threshold: percentage):
    action_to_load_more

  template item_template_name:
    show element with item
```

### 10.2 Properties

| Property | Description |
|----------|-------------|
| `items` | Data source (array or computed) |
| `item_height` | Estimated height for scroll calculations |
| `overscan` | Extra items above/below viewport (default: 3) |
| `pagination.strategy` | `cursor` or `offset` |
| `pagination.load_more` | When to trigger loading |
| `reverse_scroll` | Newest at bottom (for chat) |

### 10.3 Load More Triggers

| Trigger | Description |
|---------|-------------|
| `on_scroll_end` | Automatically when near end |
| `on_scroll_top` | When scrolled to top |
| `on_button_click` | Manual "Load More" button |
| `automatic` | Load immediately at threshold |

### 10.4 Example - Infinite Feed

```apml
show virtualized_list post_feed:
  items: posts
  item_height: estimated 120px
  overscan: 5

  pagination:
    strategy: cursor
    load_more: on_scroll_end

  on scroll_near_end(threshold: 80%):
    load_more_posts()

  template post_card:
    show card:
      avatar: post.author.avatar
      username: post.author.username
      content: post.text
      timestamp: post.created_at
```

### 10.5 Behavior

- Only DOM elements for visible items (+ overscan) are rendered
- Handles lists of 1000s+ items without lag
- Scroll position maintained during updates
- New items can be prepended without scroll jump

---

## 11. External Integrations

External integrations connect to third-party services and SDKs.

### 11.1 Syntax

```apml
external integration_name:
  type: integration_type
  sdk: "package_name"

  provides:
    - exposed_value_1
    - exposed_method

  on event_name:
    action_to_perform

  webhook webhook_name:
    verify: signature_type
    on event "event.name":
      action_with_event
```

### 11.2 Integration Types

| Type | Description |
|------|-------------|
| `auth_provider` | Authentication services (Clerk, Auth0) |
| `payments` | Payment processing (Stripe, PayPal) |
| `analytics` | Analytics tracking (Mixpanel, Segment) |
| `email` | Email services (SendGrid, Mailgun) |
| `monitoring` | Error tracking (Sentry, LogRocket) |
| `storage` | File storage (S3, Cloudinary) |
| `other` | Custom integrations |

### 11.3 Webhook Verification Types

| Type | Description |
|------|-------------|
| `stripe_signature` | Stripe webhook signature |
| `github_signature` | GitHub HMAC verification |
| `hmac_sha256` | Generic HMAC SHA-256 |
| `bearer_token` | Bearer token authentication |
| `custom` | Custom verification logic |

### 11.4 Example - Authentication Provider

```apml
external clerk:
  type: auth_provider
  sdk: "@clerk/vue"

  provides:
    - current_user
    - sign_in_flow
    - sign_out
    - user_button

  on auth_change(user):
    if user:
      sync user_profile to database
      navigate to "/dashboard"
    else:
      navigate to "/login"
```

### 11.5 Example - Payment Processing with Webhooks

```apml
external stripe:
  type: payments
  sdk: "@stripe/stripe-js"

  provides:
    - checkout_session
    - payment_element

  webhook checkout_complete:
    verify: stripe_signature
    on event "checkout.session.completed":
      activate subscription for user
      send email "Welcome to Premium"
      track analytics_event "subscription_started"
```

---

## 12. Navigation & Route Guards

### 12.1 Basic Navigation

```apml
navigation:
  route /path:
    component: ComponentName

  route /path/{param}:
    component: ParameterizedComponent
```

### 12.2 Route Guards

```apml
navigation:
  route /dashboard:
    component: Dashboard
    guard: authenticated
    fallback: /login

  route /admin:
    component: AdminPanel
    guards:
      - authenticated
      - role in [admin, superadmin]
    fallback: /unauthorized
```

### 12.3 Guard Conditions

| Condition | Description |
|-----------|-------------|
| `authenticated` | User must be logged in |
| `role in [list]` | User must have one of the roles |
| `permission("name")` | User must have permission |
| `feature_flag("name")` | Feature flag must be enabled |
| Custom expressions | `user.subscription == "premium"` |

### 12.4 Custom Guard Handlers

```apml
route /pipeline/{id}:
  component: PipelineView
  guards:
    - authenticated
    - permission("view_pipeline")
  on_guard_fail:
    log access_attempt
    show notification "Permission denied"
    redirect to "/pipelines"
```

### 12.5 Behavior

- Guards evaluated in declaration order
- Stops at first failure
- Supports async guard evaluation
- Query params can be preserved for return journey

---

## 13. API Integrations

### 13.1 API Definition

```apml
integrations:
  api api_name:
    endpoint: "https://api.example.com"

    method get_data:
      path: "/data"
      method: GET
      returns: DataModel

    method post_data:
      path: "/data"
      method: POST
      body: DataModel
      returns: ResponseModel
```

### 13.2 Database Integration

```apml
integrations:
  database:
    provider: supabase | postgres | mysql
    tables: [ModelName, OtherModel]
```

### 13.3 Authentication Integration

```apml
integrations:
  auth:
    provider: supabase | auth0 | custom
    methods: [email, google, github]
```

---

## 14. Deployment Configuration

```apml
deploy:
  platform: vercel | netlify | railway
  environment:
    production:
      url: "https://app.example.com"
    staging:
      url: "https://staging.app.example.com"
```

---

## 15. Variable Registry

All identifiers should be declared in a registry:

```apml
registry:
  components:
    DashboardComponent:
      state:
        - selectedItem: ref<ItemModel | null>
        - isLoading: ref<boolean>
      computed:
        - itemCount: computed<number>
      methods:
        - selectItem(item: ItemModel): void
        - refreshData(): Promise<void>

  api_endpoints:
    - GET /api/items -> list of ItemModel
    - POST /api/items -> ItemModel

  database_tables:
    - items: ItemModel
    - users: UserModel
```

---

## 16. Compilation Targets

APML compiles to multiple platforms:

| Target | Output |
|--------|--------|
| **TypeScript** | Types, interfaces, logic |
| **Vue 3** | SFCs, Composition API, Pinia |
| **React** | Components, hooks, Redux/Zustand |
| **Swift/SwiftUI** | iOS native components |
| **Kotlin/Compose** | Android native components |
| **SQL** | Database schemas, migrations |

---

## 17. Complete Example

```apml
app SocialFeed:
  title: "Social Feed"
  description: "Real-time social media feed application"
  version: "1.0.0"
  apml_version: "2.0.0"

data User:
  id: unique_id auto
  username: text required unique
  display_name: text required
  avatar_url: url optional
  verified: boolean default false

data Post:
  id: unique_id auto
  content: text required
  author_id: unique_id required
  created_at: timestamp auto
  likes_count: number default 0

  relationships:
    belongs_to: User via author_id

interface feed_view:
  show header:
    title: "Home"

  show tabs:
    tab "For You":
      active: selected_tab == "for_you"
    tab "Following":
      active: selected_tab == "following"

  computed filtered_posts: posts.filter(p =>
    selected_tab == "following" ? p.author_id in following_ids : true
  )

  show virtualized_list post_feed:
    items: filtered_posts
    item_height: estimated 120px

    pagination:
      strategy: cursor
      load_more: on_scroll_end

    template post_card:
      show card:
        avatar: post.author.avatar_url
        name: post.author.display_name
        content: post.content
        timestamp: post.created_at
        likes: post.likes_count

logic feed_logic:
  process like_post:
    when user clicks like_button on post:
      optimistic:
        increment post.likes_count by 1
        set post.is_liked to true

      call api like_post with { post_id: post.id }

      on_error:
        rollback
        show notification "Failed to like"

realtime feed_updates:
  url: "wss://api.example.com/feed"

  subscribe "timeline":
    on_message(new_post):
      prepend new_post to posts

  reconnect_policy: exponential_backoff

navigation:
  route /:
    component: FeedView

  route /profile/{username}:
    component: ProfileView
    guard: authenticated
    fallback: /login

deploy:
  platform: vercel
```

---

## 18. Proposed Features (v2.1)

The following constructs emerged from Round 3 battles (Zenjin, E-commerce, Chat) and are **PROPOSED** for APML v2.1. They are documented here for review and implementation planning.

### 18.1 Temporal Functions & Operators (GAP-011)

**Status:** PROPOSED v2.1
**Appeared in:** 3/3 Round 3 battles
**Severity:** CRITICAL

Time-based logic is nearly universal across applications. This proposal formalizes temporal functions, duration literals, and date/time operators.

#### Built-in Temporal Functions

```apml
# Current time/date functions
now()              # Current timestamp (UTC)
today()            # Current date at 00:00:00
yesterday()        # Previous date
tomorrow()         # Next date
start_of_week()    # Monday 00:00:00
end_of_week()      # Sunday 23:59:59
start_of_month()   # First day of month 00:00:00
end_of_month()     # Last day of month 23:59:59
```

#### Duration Literals

```apml
# Singular and plural forms supported
1 second, 30 seconds
1 minute, 30 minutes
1 hour, 2 hours
1 day, 7 days
1 week, 2 weeks
1 month, 3 months
1 year, 2 years
```

#### Temporal Operators

```apml
# Duration calculations
time_since(timestamp)           # Returns duration from timestamp to now
time_until(timestamp)           # Returns duration from now to timestamp

# Boolean checks
is_within_last(timestamp, duration)   # true if timestamp within duration ago
is_today(date)                         # true if date equals today
is_yesterday(date)                     # true if date equals yesterday
is_before(timestamp)                   # true if timestamp < now
is_after(timestamp)                    # true if timestamp > now

# Timezone handling
now().in_timezone("America/New_York")  # Convert to timezone
timestamp.to_timezone("UTC")           # Convert to UTC

# Date arithmetic
now() + 3 days                         # Add duration to timestamp
delivery_date - order_date             # Difference between dates
```

#### Usage Examples

```apml
# Cooldown check (Zenjin)
state_machine question_mastery:
  transitions:
    from learning to familiar:
      when: time_since(last_attempt_at) > 24 hours
      action: promote_to_familiar

# Coupon validation (E-commerce)
computed coupon_is_valid:
  value: applied_coupon.expires_at.is_after(now())

# Streak tracking (Zenjin)
process check_streak:
  when user logs in:
    if user.last_active_date.is_yesterday():
      increment streak_count
    else if !user.last_active_date.is_today():
      reset streak_count to 1

# Flash sale (E-commerce)
computed flash_sale_active:
  value: now() >= sale_start_time && now() <= sale_end_time

# "Last seen" indicator (Chat)
computed last_seen_text:
  if user.last_active_at.is_today():
    return "Active today"
  else if user.last_active_at.is_yesterday():
    return "Active yesterday"
  else:
    value: time_since(user.last_active_at)
    format: duration  # "3 days ago"
```

---

### 18.2 Advanced Form Validation (GAP-012)

**Status:** PROPOSED v2.1
**Appeared in:** 2/3 Round 3 battles
**Severity:** CRITICAL

Current `validate` construct supports only simple synchronous checks. Real-world forms require async validation, cross-field dependencies, debouncing, and conditional rules.

#### Enhanced Validation Syntax

```apml
validate form_name:
  field field_name:
    type: validation_type
    check: condition
    error: "Error message"
    async: boolean
    debounce: duration
    depends_on: [field1, field2]

  cross_field:
    check: complex_condition
    error: "Error message"
    depends_on: [field1, field2]
```

#### Properties

| Property | Description |
|----------|-------------|
| `field` | Validate individual field |
| `type` | Field type (email, url, text, number) |
| `check` | Validation condition |
| `error` | Error message on failure |
| `async` | Async validation function (returns Promise) |
| `debounce` | Delay before validation fires |
| `depends_on` | Fields that trigger re-validation |
| `cross_field` | Validation across multiple fields |

#### Example: E-commerce Checkout

```apml
validate checkout_form:
  field email:
    type: email
    check: email matches email_pattern
    error: "Invalid email format"
    async: check_email_unique(email)
    debounce: 500ms

  field postal_code:
    type: text
    check: postal_code matches postal_pattern_for(country)
    error: "Invalid postal code for selected country"
    depends_on: [country]

  field coupon_code:
    check: coupon_code.length >= 4
    error: "Coupon code must be at least 4 characters"
    async: api.validate_coupon(coupon_code)
    debounce: 300ms

  field phone:
    type: text
    check: phone matches phone_pattern
    error: "Invalid phone number"
    depends_on: [country]

  cross_field:
    check: (billing_same_as_shipping) OR (billing_address != null)
    error: "Please provide a billing address"
    depends_on: [billing_same_as_shipping, billing_address]

  cross_field:
    check: (payment_method != "credit_card") OR (card_number != null && cvv != null)
    error: "Credit card details required"
    depends_on: [payment_method, card_number, cvv]
```

#### Behavior

- **Sync validation**: Runs immediately on input
- **Async validation**: Returns Promise, shows loading indicator
- **Debouncing**: Delays validation until user stops typing
- **Dependencies**: Re-validates when dependent fields change
- **Cross-field**: Validates relationships between fields
- **Error display**: Shows inline errors per field

---

### 18.3 Conditional Logic in Computed Values (GAP-013)

**Status:** PROPOSED v2.1
**Appeared in:** 2/3 Round 3 battles
**Severity:** CRITICAL

Current `computed` values support only single expressions. Business rules require if/else and switch/case control flow.

#### Enhanced Computed Syntax

```apml
computed property_name:
  if condition:
    return value
  else if condition:
    return value
  else:
    return value

computed property_name:
  switch expression:
    case value1:
      return result1
    case value2:
      return result2
    default:
      return default_result
```

#### Example: E-commerce Shipping

```apml
computed shipping_cost:
  if cart_subtotal >= 50:
    return 0  # Free shipping over $50
  else if user.is_premium:
    return 4.99  # Premium members get discounted shipping
  else:
    return 9.99  # Standard shipping
```

#### Example: Discount Calculation

```apml
computed discount_amount:
  if !applied_coupon:
    return 0

  switch applied_coupon.type:
    case "percentage":
      set discount = (cart_subtotal * applied_coupon.value / 100)
      return min(discount, applied_coupon.max_discount)

    case "fixed":
      return min(applied_coupon.value, cart_subtotal)

    case "buy_x_get_y":
      return calculate_bxgy_discount(cart_items, applied_coupon)

    default:
      return 0
```

#### Example: Tax Calculation

```apml
computed tax_amount:
  if shipping_address.country == "US":
    switch shipping_address.state:
      case "CA":
        return subtotal * 0.0725
      case "NY":
        return subtotal * 0.08
      case "TX":
        return subtotal * 0.0625
      default:
        return 0
  else if shipping_address.country == "CA":
    return subtotal * 0.13  # HST
  else:
    return 0
```

#### Behavior

- All branches must return a value
- Supports nested conditions
- Can mix if/else with switch/case
- Maintains reactive dependencies
- Type-safe (all branches return same type)

---

### 18.4 File Upload with Progress & Cancellation (GAP-014)

**Status:** PROPOSED v2.1
**Appeared in:** 2/3 Round 3 battles
**Severity:** HIGH

File uploads require progress tracking, cancellation, and retry capabilities beyond basic API calls.

#### Enhanced API Call Syntax

```apml
process upload_file:
  when user selects file:
    set task_var to call api endpoint_name with params

    on_progress(percent):
      # Update progress indicator
      update state with { upload_progress: percent }

    on_success(response):
      # Handle completion
      update state with { url: response.url }

    on_error(error):
      # Handle failure
      show notification "Upload failed"

process cancel_operation:
  when user clicks cancel_button:
    cancel task_var

process retry_operation:
  when user clicks retry_button:
    restart task_var
```

#### Properties

| Property | Description |
|----------|-------------|
| `set task_var to` | Capture task reference for later control |
| `on_progress(percent)` | Progress callback (0-100) |
| `cancel task_var` | Abort in-progress request |
| `restart task_var` | Retry failed request |

#### Example: Image Upload with Progress

```apml
process upload_product_image:
  when user selects image:
    create Attachment with {
      id: generate_uuid(),
      file_name: image.name,
      file_size: image.size,
      upload_status: "uploading",
      upload_progress: 0
    }

    set upload_task to call api upload_image with { file: image }

    on_progress(percent):
      update Attachment with { upload_progress: percent }

    on_success(response):
      update Attachment with {
        url: response.url,
        thumbnail_url: response.thumbnail_url,
        upload_status: "completed"
      }
      show notification "Image uploaded successfully"

    on_error(error):
      update Attachment with { upload_status: "failed" }
      show notification "Upload failed. Please retry."

  process cancel_upload:
    when user clicks cancel_icon on Attachment:
      cancel upload_task
      delete Attachment
      show notification "Upload cancelled"

  process retry_upload:
    when user clicks retry_button on Attachment:
      update Attachment with { upload_status: "uploading", upload_progress: 0 }
      restart upload_task
```

---

### 18.5 PWA Lifecycle & Service Workers (GAP-015)

**Status:** PROPOSED v2.1
**Appeared in:** 2/6 total battles (Chat, X.com)
**Severity:** CRITICAL for web-first apps

Progressive Web Apps require service worker lifecycle management, background sync, push notifications, and offline support.

#### PWA Construct

```apml
pwa:
  manifest:
    name: "App Name"
    short_name: "App"
    display: standalone | fullscreen | minimal-ui
    theme_color: "#000000"
    background_color: "#ffffff"
    icons:
      - src: "/icon-192.png", sizes: "192x192"
      - src: "/icon-512.png", sizes: "512x512"

  service_worker:
    lifecycle:
      on_install:
        # Actions during service worker install
        cache static_assets: [paths]
        skip_waiting

      on_activate:
        # Actions during service worker activation
        clear_old_caches
        claim_clients

      on_fetch(request):
        # Cache strategy per request type
        if condition:
          strategy: cache_strategy_name
          fallback: path

    background_sync:
      on_sync_event "event_name":
        # Actions during background sync
        process offline_queue

  push_notifications:
    request_permission:
      when: trigger_condition
      ui: permission_dialog_component

    on_push_received(notification):
      if app_is_closed:
        show system_notification
      else:
        update in_app_state

  offline_detection:
    on_offline:
      # Actions when connection lost
      show offline_banner

    on_online:
      # Actions when connection restored
      hide offline_banner
      trigger background_sync
```

#### Cache Strategies

| Strategy | Description |
|----------|-------------|
| `cache_first` | Serve from cache, fall back to network |
| `network_first` | Fetch from network, fall back to cache |
| `cache_only` | Only serve from cache |
| `network_only` | Only fetch from network |
| `stale_while_revalidate` | Serve from cache, update in background |

#### Example: Chat Application PWA

```apml
pwa:
  manifest:
    name: "Secure Chat"
    short_name: "Chat"
    display: standalone
    theme_color: "#075E54"
    background_color: "#ffffff"
    icons:
      - src: "/icon-192.png", sizes: "192x192"
      - src: "/icon-512.png", sizes: "512x512"

  service_worker:
    lifecycle:
      on_install:
        cache static_assets: ["/", "/app.js", "/styles.css", "/offline.html"]
        skip_waiting

      on_activate:
        clear_old_caches
        claim_clients

      on_fetch(request):
        if request.url.includes("/api/"):
          strategy: network_first
          timeout: 3 seconds
          fallback: cache

        else if request.type == "navigate":
          strategy: network_first
          fallback: "/offline.html"

        else:
          strategy: cache_first

    background_sync:
      on_sync_event "sync-messages":
        process offline_message_queue
        send queued_messages
        show notification "Messages synced"

  push_notifications:
    request_permission:
      when: user_enables_notifications
      ui: show notification_permission_dialog

    on_push_received(notification):
      if app_is_closed:
        show system_notification with {
          title: notification.sender_name,
          body: notification.message_preview,
          icon: notification.sender_avatar,
          click_action: "/conversation/" + notification.conversation_id
        }
      else:
        update unread_count
        play notification_sound

  offline_detection:
    on_offline:
      show offline_banner
      queue outgoing_messages
      disable send_button

    on_online:
      hide offline_banner
      enable send_button
      trigger background_sync
```

---

## 19. Version History

### v2.0.0 (2025-12-05)
- **computed**: Reactive derived values with formatting
- **realtime**: WebSocket connections with subscriptions
- **optimistic**: Optimistic UI updates with rollback
- **state_machine**: Finite state machines with guards and cooldowns
- **virtualized_list**: Infinite scroll with cursor/offset pagination
- **external**: Third-party integrations with webhooks
- **navigation guards**: Route protection with guards and fallbacks

### v1.0.0
- Initial specification with core constructs
- Basic data models, interfaces, and logic sections

---

## Appendix A: Reserved Keywords

```
app, data, interface, logic, computed, realtime, state_machine,
virtualized_list, external, navigation, integrations, deploy,
registry, show, hide, when, if, else, for, each, in, process,
validate, calculate, optimistic, rollback, on_error, on_success,
subscribe, heartbeat, reconnect_policy, guard, guards, fallback,
route, webhook, verify
```

## Appendix B: Compiler Requirements

Each target compiler must:

1. Parse APML into a consistent AST
2. Validate Trinity Principle compliance
3. Generate type-safe code for the target framework
4. Implement all reactive patterns (computed, state machines)
5. Handle real-time connections appropriately
6. Generate optimistic update/rollback logic
7. Implement virtualized list rendering
8. Handle external integration setup
9. Generate route guards and navigation

---

*APML v2.0.0 - Bridging Human Intent and Executable Code*
