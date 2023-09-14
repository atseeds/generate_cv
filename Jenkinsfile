pipeline {

//   environment {
//     dockerimagename = "quancyber/next-app"
//     dockerImage = ""
//   }

  agent any

  stages {

    stage('Checkout Source') {
      steps {
        git url: 'https://github.com/atseeds/generate_cv.git', branch: 'dev' 
      }
    }

    stage('Build image') {
      steps{
        sh 'docker build -t quancyber/next-app:latest .'
      }
    }

    stage('Pushing Image') {
      environment {
               registryCredential = 'dockerhub-credentials'
           }
      steps{
        script {
          docker.withRegistry( 'https://registry.hub.docker.com', registryCredential ) {
            sh 'docker push quancyber/next-app:latest'
          }
        }
      }
    }

    stage('Deploying Next.js container to Kubernetes') {
      steps {
        script {
          kubernetesDeploy(configs: "deployment.yaml", "service.yaml")
        }
      }
    }

  }

}