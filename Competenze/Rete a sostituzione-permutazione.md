---
tipo: competenza
area: informatica
corsi: [Crittografia]
livello: [magistrale]
aliases: ["substitution-permutation network", "SPN", "SP network", "S-box", "substitution box", "round SP"]
tags: [competenza, area/informatica]
---

# Rete a sostituzione-permutazione

> Struttura di round dei cifrari a blocchi in cui tutto il blocco passa, a ogni round, per uno strato di sostituzioni non lineari (S-box) e uno di permutazioni, mescolato con la sottochiave.

## Definizione / enunciato
Un round SP (Figura 5.1.4 della dispensa) ha tre strati:
1. **chiave:** il blocco si combina con la sottochiave di round $k$;
2. **sostituzione:** il blocco si divide in sotto-blocchi, ognuno trasformato da una S-box;
3. **permutazione:** i bit in uscita dalle S-box vengono permutati, così colpiscono S-box diverse nel round seguente.

Una **S-box** è una lookup table: l'ingresso fa da indice per leggere l'uscita.

## Formule chiave
Cifrario giocattolo di H. M. Heys (A Tutorial on Linear and Differential Cryptanalysis), riportato in Crypto 4: blocco di 16 bit diviso in quattro sotto-blocchi da 4 bit, ognuno in ingresso a una S-box $4\times4$,
$$S:\mathbb Z_2^4\to\mathbb Z_2^4,$$
realizzabile come tabella di 16 valori da 4 bit indicizzata dall'intero dei 4 bit d'ingresso.

## Intuizione
La proprietà fondamentale di una S-box è di essere **non lineare**: i bit d'uscita non sono un'operazione lineare dei bit d'ingresso. Se tutto fosse lineare, il cifrario si romperebbe risolvendo un sistema lineare. La S-box porta la confusione, la permutazione la diffusione.

## Come si usa
- **AES** è una rete SP orientata ai byte: SubBytes è lo strato S-box, ShiftRows e MixColumns diffondono, poi c'è lo XOR con la chiave di round.
- Le S-box compaiono anche dentro la $f$ di DES, che però ha struttura di Feistel. Criteri di progetto delle S-box di DES: nessun bit d'uscita troppo vicino a una combinazione lineare dei bit d'ingresso; se due ingressi differiscono di un bit, le uscite differiscono di almeno due bit; ecc.

## Nei corsi
- **Crittografia** (magistrale): Critto 5 §5.1.2 (solo figura); Crypto 4 §4.1.2, con il toy SPN di Heys. Fonti: `magistrale/Crittografia/Esercitazioni/SoluzioniCrypto/Critto_week5.pdf` (p. 4); `magistrale/Crittografia/Slide/slides week 1-14/week4/Crypto4.pdf` (pp. 4-5, 9).

## Prerequisiti
- [[Cifrario a blocchi]]: la rete SP è un modo di costruirne i round
- [[Confusione e diffusione]]: sostituzione e permutazione le realizzano

## Porta a
- [[AES]]: la rete SP standard

## Collegati
- [[Rete di Feistel]]: architettura alternativa, che cifra metà blocco per round
- [[Data Encryption Standard|DES]]: usa S-box dentro una struttura di Feistel
