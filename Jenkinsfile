pipeline {
    agent any
    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'UAT', url: 'https://github.com/hoangdinh2411/coupons-client.git'
            }
        }
        stage('Copy .env file') {
            steps {
                configFileProvider([configFile(fileId: 'coupons-client', targetLocation: '.env')]) {
                    sh 'ls -la && cat .env' 
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
