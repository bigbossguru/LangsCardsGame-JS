pipeline {
    agent any
    stages {
        stage('Docker Build') {
            steps {
                script {
                    sh 'docker build -t langcardgame-image .'
                }
            }
        }
        stage('Docker Stop and Clean') {
            steps {
                script {
                    try {
                        sh 'docker kill dev_langcardgame'
                        sh 'docker rm dev_langcardgame'
                    } catch (Exception e) {
                        echo 'Container does not exist'
                    }
                }
            }
        }
        stage('Docker Run App') {
            steps {
                script {
                    sh 'docker run --name dev_langcardgame -p 3000:3000 -d langcardgame-image'
                }
            }
        }
    }
}
