---
tipo: competenza
area: informatica
corsi: [Base di dati]
livello: [triennale]
aliases: [semi-join, semijoin, anti-join, antijoin]
tags: [competenza, area/informatica]
---

# Semi-join e anti-join

> Varianti del join che restituiscono solo tuple del primo operando: il semi-join quelle legate ad almeno una tupla del secondo, l'anti-join quelle non legate a nessuna.

## Definizione / enunciato
**Semi-join** $R = A \ltimes_p B$: seleziona le tuple di $A$ "semanticamente legate" ad almeno una tupla di $B$; le informazioni di $B$ non compaiono. Schema uguale a quello di $A$; il predicato $p$ ha la forma del theta-join. **Non** è commutativo.

**Anti-join** $R = A\ \overline{\ltimes}_p\ B$ (nelle slide il simbolo del semi-join soprassegnato): seleziona le tuple di $A$ per cui **non esiste** nessuna tupla di $B$ che renda vero $p$. Schema di $A$. Né commutativo né associativo.

## Formule chiave
$$A \ltimes_p B = \pi_{\text{schema}(A)}\,(A \bowtie_p B)$$
Esempi delle slide:
$$\text{Docenti} \ltimes_p \text{Corsi},\qquad \text{Docenti}\ \overline{\ltimes}_p\ \text{Corsi},\qquad p:\ \text{Docenti.MatrDocente}=\text{Corsi.MatrDocente}$$
Il primo dà i docenti titolari di almeno un corso (D102 Verdi, D104 Bianchi), il secondo quelli che non tengono corsi (D105 Neri).

## Intuizione
Il semi-join è un "filtro per esistenza", l'anti-join un "filtro per non esistenza". La stessa richiesta dell'anti-join si scrive anche con la differenza: $\text{Docenti} \bowtie \big(\pi_{\text{MatrDocente}}\text{Docenti} - \pi_{\text{MatrDocente}}\text{Corsi}\big)$.

## Come si usa
Quando la domanda contiene "almeno uno" (semi-join) o "nessuno", "non" (anti-join) e il risultato riguarda una sola relazione. In SQL l'anti-join corrisponde a una sottointerrogazione con `NOT IN`: le slide traducono "fornitori che non forniscono P2" sia come differenza sia come anti-join $F\ \overline{\ltimes}_p\ \sigma_{\text{CodP}=\text{'P2'}} FP$ con $p: F.\text{CodF}=FP.\text{CodF}$.

## Nei corsi
- **Base di dati** (triennale): Fonti: `triennale/ANNO 3/base di dati/Algebra_Relazionale.pdf` (pp. 44-49 semi-join, pp. 76-81 differenza e anti-join; simboli letti sulle immagini di pp. 44 e 79); `triennale/ANNO 3/base di dati/2-SQL_query_nidificate-2.pdf` (p. 32).

## Prerequisiti
- [[Join relazionale]]: il semi-join è un theta-join proiettato

## Porta a
- Nessuno.

## Collegati
- [[Operatori insiemistici relazionali]]: la differenza esprime la stessa richiesta dell'anti-join
- [[Interrogazioni nidificate]]: NOT IN in SQL corrisponde all'anti-join
