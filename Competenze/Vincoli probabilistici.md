---
tipo: competenza
area: ottimizzazione
corsi: [Ottimizzazione in condizione di incertezza]
livello: [magistrale]
aliases: ["chance constraints", "chance-constrained programming", "vincoli in probabilità", "programmazione con vincoli probabilistici", "probabilistic constraints", "reliability constraints"]
tags: [competenza, area/ottimizzazione]
---

# Vincoli probabilistici

> Un vincolo incerto $g(\mathbf x,\tilde\xi)\le0$ non si impone per ogni realizzazione ma con probabilità elevata: modo naturale di esprimere requisiti di affidabilità in un modello statico.

## Definizione / enunciato
Dato un vincolo incerto $g(\mathbf x,\tilde\xi)\le0$, lo si richiede con probabilità elevata, tipicamente del 90% o 95% (probabilità di fallimento del 10% o 5%); in formula, scrittura mia che generalizza l'esempio delle lezioni, $\mathbb P[g(\mathbf x,\tilde\xi)\le0]\ge1-\varepsilon$. È l'alternativa al ricorso quando non c'è una vera azione correttiva da pagare, ma un requisito di affidabilità; nel worst case robusto si chiederebbe invece il vincolo per ogni $\xi\in\mathcal U$.

## Formule chiave
Esempio delle lezioni: TSP con domanda aleatoria e capacità 10; un percorso o una sequenza di percorsi è ammissibile se il veicolo raccoglie la domanda totale con probabilità elevata,
$$\mathbb P[\text{non failure}]\ge0.95,$$
e tra i percorsi considerati l'ottimo che rispetta il requisito è $(0,A,D,0,B,C,0)$.

## Intuizione
Il newsvendor è facile anche perché non ha vincoli di ammissibilità; appena compaiono vincoli incerti bisogna decidere che cosa significa "ammissibile". Il vincolo probabilistico accetta un piccolo rischio di violazione invece di pagare il caso peggiore.

## Come si usa
Si confrontano i percorsi candidati calcolando la probabilità di fallimento: nel TSP con domanda di C pari a 1 o 7 con probabilità 1/2 ciascuna, i percorsi che possono fallire con probabilità 1/2 non soddisfano il requisito del 95%. Le lezioni non sviluppano riformulazioni trattabili generali.

## Nei corsi
- **Ottimizzazione in condizione di incertezza** (magistrale): citati nelle conclusioni sul newsvendor e nell'esempio "TSP with random demand". Fonti: `magistrale/Ottimizzazione in condizione di incertezza/01.V2 - Platonic.pdf` (p. 16); `magistrale/Ottimizzazione in condizione di incertezza/lezione_1.pdf` (p. 18-20).

## Prerequisiti
- [[Ottimizzazione sotto incertezza]]: problema dei vincoli incerti
- [[Problema del commesso viaggiatore]]: esempio del percorso con domanda aleatoria

## Collegati
- [[Programmazione stocastica a due stadi]]: alternativa con ricorso a pagamento
- [[Programmazione lineare robusta]]: alternativa che impone il vincolo nel caso peggiore
- [[Value at Risk]]: stesso concetto di quantile e probabilità di superamento
