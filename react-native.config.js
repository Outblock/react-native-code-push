module.exports = {
    dependency: {
        platforms: {
            android: {
                packageInstance:
                    "CodePush.getInstance(getResources().getString(R.string.CodePushDeploymentKey), getApplicationContext(), BuildConfig.DEBUG)",
                sourceDir: './android',
                packageImportPath: 'import com.microsoft.codepush.react.CodePush;',
            },
            ios: {
                sharedLibraries: ['libz']
            }
        }
    }
};
