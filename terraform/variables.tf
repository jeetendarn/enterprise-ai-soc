variable "namespace" {

  default = "enterprise-ai-soc"

}

variable "backend_image" {

  default = "jeetendarn/enterprise-ai-soc-backend:v1"

}

variable "frontend_image" {

  default = "jeetendarn/enterprise-ai-soc-frontend:v1"

}

variable "postgres_image" {

  default = "postgres:17"

}