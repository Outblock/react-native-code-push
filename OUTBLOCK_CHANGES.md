# @outblock/react-native-code-push

## Changes from @revopush/react-native-code-push v1.2.0

This is a **fixed version** of `@revopush/react-native-code-push` that resolves the auto-linking configuration issue causing duplicate class generation.

### 🔧 **Fixes Applied**

1. **Fixed Android Directory Structure**
   - Moved from `android/app/` to standard `android/` structure
   - This prevents React Native's codegen from incorrectly treating the module as a standalone app

2. **Fixed Auto-linking Configuration**
   - Changed `sourceDir` from `'./android/app'` to `'./android'` in `react-native.config.js`
   - Added proper `packageImportPath` configuration
   - Added iOS configuration for consistency

3. **Resolved Duplicate Class Issue**
   - Prevents generation of duplicate `NativeFRWBridgeSpec` classes
   - Eliminates build-time conflicts: `Type com.*.*.NativeFRWBridgeSpec is defined multiple times`

### 🚀 **Usage**

Replace your dependency:

```bash
# Remove old version
npm uninstall @revopush/react-native-code-push

# Install fixed version
npm install @outblock/react-native-code-push
```

Update imports in your code:
```javascript
// Replace this
import CodePush from '@revopush/react-native-code-push';

// With this
import CodePush from '@outblock/react-native-code-push';
```

### ✅ **Compatibility**

- ✅ **100% API Compatible** - Drop-in replacement
- ✅ **React Native 0.80+** - Full support for new architecture
- ✅ **Android & iOS** - Cross-platform support maintained
- ✅ **TypeScript** - Full TypeScript definitions included

### 📝 **Technical Details**

**Root Cause:** The original `@revopush/react-native-code-push` used `android/app/` structure and `sourceDir: './android/app'` configuration. This caused React Native's auto-linking to treat the CodePush module as a standalone app, leading to incorrect codegen that duplicated the main app's bridge specifications.

**Solution:** Restructured the Android directory to follow React Native library standards and updated auto-linking configuration accordingly.

---

*This package is maintained by [@outblock](https://github.com/outblock) for the Flow Reference Wallet project.*