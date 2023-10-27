pipeline {
    agent any
    stages {
        stage('Docker Stop Previous Container') {
            steps {
                script {
                    try {
                        sh 'docker kill game_frontend'
                    } catch (Exception e) {
                        echo 'Container does not exist'
                    }
                }
            }
        }
        stage('Docker Remove Previous Container') {
            steps {
                script {
                    try {
                        sh 'docker rm game_frontend'
                    } catch (Exception e) {
                        echo 'Container does not exist'
                    }
                }
            }
        }
        stage('Docker Build and Run New Container') {
            steps {
                script {
                    sh 'docker compose -f docker-compose.yml up -d --build'
                }
            }
        }
    }
}
