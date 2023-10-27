pipeline {
    agent any
    stages {
        stage('Docker Stop Previous Container') {
            steps {
                script {
                    try {
                        sh 'docker kill dev_langcardgame'
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
                        sh 'docker rm dev_langcardgame'
                    } catch (Exception e) {
                        echo 'Container does not exist'
                    }
                }
            }
        }
        stage('Docker Build New Container') {
            steps {
                script {
                    sh 'docker build -t langcardgame-image .'
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
