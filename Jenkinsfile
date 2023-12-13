pipeline{
    agent any
    stages{
        stage("Clone Code"){
            steps{
                echo "Cloning Code"
                git 'https://github.com/yxshwxnt/stock-management.git'
            }
        } 
        stage("Build"){
            steps{
                echo "Building the image" 
                sh "docker build -t stock-mgmt ."
            }
        } 
        stage("Push to Docker Hub"){
            steps{
                echo "Login to Docker Hub" 
                withCredentials([usernamePassword(credentialsId: 'docker-login', passwordVariable: 'password', usernameVariable: 'username')]) {
                    sh "docker tag stock-mgmt ${env.username}/stock-mgmt:latest" 
                    sh "docker login -u ${env.username} -p ${env.password}" 
                    echo "Login Success" 
                    sh "docker push ${env.username}/stock-mgmt:latest" 
                }
            }
        } 
        stage("Deploy"){
            steps{ 
                echo "Deploying the container" 
                sh "Docker run -d stock-mgmt"
            }
        }
    }
}  
