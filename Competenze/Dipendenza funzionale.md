---
tipo: competenza
area: informatica
corsi: [Base di dati]
livello: [triennale]
aliases: [functional dependency, dipendenze funzionali, X determina Y, dipendenza banale, dipendenza non banale]
tags: [competenza, area/informatica]
---

# Dipendenza funzionale

> Vincolo di integrità per cui il valore di un insieme di attributi X determina quello di un insieme Y: due tuple uguali su X sono uguali anche su Y.

## Definizione / enunciato
Una relazione $r$ soddisfa la dipendenza funzionale $X \to Y$ se, per ogni coppia di tuple $t_1, t_2$ di $r$ con gli stessi valori sugli attributi di $X$, $t_1$ e $t_2$ hanno gli stessi valori anche sugli attributi di $Y$ ("$X$ determina $Y$ in $r$"). È un tipo particolare di vincolo d'integrità che descrive legami funzionali tra attributi.

$X \to Y$ è **non banale** se nessun attributo di $X$ compare in $Y$; per esempio MatrStudente CodCorso → CodCorso è banale.

## Formule chiave
$$\forall\, t_1, t_2 \in r:\quad t_1[X] = t_2[X] \ \Rightarrow\ t_1[Y] = t_2[Y]$$
Data una chiave $K$ di $r$: $K \to$ qualsiasi altro attributo o insieme di attributi di $r$.

## Intuizione
"Ogni volta che compare lo stesso studente, compare la stessa residenza": la dipendenza è la ragione della ripetizione. Se $X$ è (contiene) una chiave non ci sono ripetizioni, perché ogni valore di $X$ compare una volta sola.

## Come si usa
Nell'esempio `EsameSuperato(MatrStudente, Residenza, CodCorso, NomeCorso, Voto)`:
- MatrStudente → Residenza, CodCorso → NomeCorso: non contengono la chiave e causano anomalie;
- MatrStudente CodCorso → Voto: dipendenza dalla chiave, nessuna anomalia.

In `R(Impiegato, Categoria, Stipendio)` valgono Impiegato → Categoria, Impiegato → Stipendio, Categoria → Stipendio; la terza è quella che una decomposizione sbagliata può perdere. Le dipendenze guidano la decomposizione: le nuove relazioni si ottengono proiettando sugli attributi di ogni dipendenza, con chiave la parte sinistra.

## Nei corsi
- **Base di dati** (triennale): solo definizione e uso nella BCNF; chiusura e assiomi non sono trattati. Fonti: `triennale/ANNO 3/base di dati/Normalizzazione-1.pdf` (pp. 11-16, 26).

## Prerequisiti
- [[Chiave di una relazione]]: la chiave determina tutti gli attributi
- [[Vincoli di integrità]]: è un tipo di vincolo
- [[Anomalie di aggiornamento]]: le dipendenze ne spiegano la causa

## Porta a
- [[Forma normale di Boyce-Codd]]: definita sulle dipendenze funzionali
- [[Decomposizione senza perdita]]: condizione espressa con una dipendenza
- [[Conservazione delle dipendenze]]: le dipendenze devono sopravvivere alla decomposizione

## Collegati
- Nessuno.
