import { Injectable } from "@angular/core";
@Injectable()
export class ValidationFeedbackTranslation {
  validation = {
    en: {
      confirm: "Confirm",
      required: "This field is required",
      invalid: "Input value is invalid",
      email_invalid: "Email is invalid",
      minimum_invalid: "Input has to be a minimum of",
      maximum_invalid: "Input can contain a maximum of",
      characters: "characters",
      greater_than: "Enter a value greater than or equal to",
      less_than: "Enter a value less than or equal to ",
      not_in_menu: "No results found",
      is_match: "Value not matching",
      max_size: "File exceeded the allowed size",
      allowed_format: "available formats:",
      error_pdf: "No documents available",
      delete_file: "Click here to delete file",
      browse: "Browse",
      replace: "Replace",
      delete: "Delete",
    },
    fr: {
      confirm: "Confirmer",
      required: "Ce champ est obligatoire",
      invalid: "La valeur d’entrée est invalide",
      email_invalid: "Le courriel est invalide",
      minimum_invalid: "La contribution doit être un minimum de",
      maximum_invalid: "L’entrée peut contenir un maximum de",
      characters: "Caractères",
      greater_than: "Entrez une valeur supérieure ou égale à",
      less_than: "Entrez une valeur inférieure ou égale à",
      not_in_menu: "Aucun Résultat",
      is_match: "valeur nesutampa",
      max_size: "Le fichier a dépassé la taille autorisée",
      allowed_format: "Formats de fichiers autorisés:",
      error_pdf: "Aucun document disponible",
      delete_file: "Cliquez ici pour supprimer le fichier",
      browse: "les fichiers",
      replace: "Remplacer",
      delete: "Supprimer",
    },
  };
}
