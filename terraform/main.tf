resource "kubernetes_namespace" "enterprise_ai_soc" {

  metadata {

    name = var.namespace

  }

}