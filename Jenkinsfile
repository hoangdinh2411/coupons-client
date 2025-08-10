pipeline {
    agent any
    triggers {
        githubPush()
    }
    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/hoangdinh2411/coupons-client.git'
            }
        }
        stage('Copy .env file') {
            steps {
                configFileProvider([configFile(fileId: 'coupons-client-env', targetLocation: '.env')]) {
                    sh 'ls -la && cat .env' 
                }
            }
        }
        stage('Pre-build Cleanup') {
            steps {
                script {
                    sh '''
                    DANGLING_COUNT=$(docker images -f "dangling=true" -q | wc -l)
                    echo "Found $DANGLING_COUNT dangling images (<none>)"
                    if [ "$DANGLING_COUNT" -gt 0 ]; then
                        echo "Dangling images details:"
                        docker images -f "dangling=true"
                        echo "Removing dangling images..."
                        docker images -f "dangling=true" -q | xargs -r docker rmi -f || true
                        echo "Dangling images removed successfully"
                    else
                        echo "No dangling images found"
                    fi
                    echo "=== Current images after cleanup ==="
                    docker images
                    '''
                }
            }
        }
        stage('Build and Restart Docker Containers') {
            steps {
                script {
                    sh '''
                    docker-compose down
                    docker-compose up --build -d
                    '''
                }
            }
        }
    }
}
