const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Ensure the build directory exists
const buildDir = path.join(__dirname, 'build');
if (!fs.existsSync(buildDir)) {
  fs.mkdirSync(buildDir, { recursive: true });
}

// Set environment variables
process.env.NODE_ENV = 'production';
process.env.PUBLIC_URL = '/';
process.env.GENERATE_SOURCEMAP = 'false';

// Run the build
console.log('Starting Vercel build...');

const runCommand = (command, errorMessage) => {
  try {
    console.log(`Running: ${command}`);
    execSync(command, { stdio: 'inherit' });
    return true;
  } catch (error) {
    console.error(`${errorMessage}:`, error);
    return false;
  }
};

try {
  // Install dependencies
  console.log('Installing dependencies...');
  if (!runCommand('npm install --legacy-peer-deps', 'Failed to install dependencies')) {
    process.exit(1);
  }

  // Install TypeScript if not present
  if (!fs.existsSync(path.join(__dirname, 'node_modules/typescript'))) {
    console.log('Installing TypeScript...');
    if (!runCommand('npm install --save-dev typescript@4.9.5', 'Failed to install TypeScript')) {
      process.exit(1);
    }
  }

  // Run the build script with specific environment variables
  console.log('Running build script...');
  const buildSuccess = runCommand(
    'CI=false NODE_OPTIONS=--openssl-legacy-provider react-app-rewired build',
    'Build failed'
  );

  if (!buildSuccess) {
    // Try with react-scripts as fallback
    console.log('Trying fallback build with react-scripts...');
    const fallbackSuccess = runCommand(
      'CI=false NODE_OPTIONS=--openssl-legacy-provider react-scripts build',
      'Fallback build failed'
    );
    
    if (!fallbackSuccess) {
      throw new Error('All build attempts failed');
    }
  }
  
  console.log('Build completed successfully!');
  process.exit(0);
} catch (error) {
  console.error('Build failed with error:', error);
  process.exit(1);
}
