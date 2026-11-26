---
tipo: competenza
area: informatica
corsi: [Crittografia]
livello: [magistrale]
aliases: [digital cash, moneta digitale, contante elettronico, coin digitale]
tags: [competenza, area/informatica]
---

# Denaro elettronico

> Protocollo che riproduce digitalmente le banconote: difficile da falsificare, protetto dalla doppia spesa e **anonimo** per il cliente. Si basa sulla firma cieca.

## Definizione / enunciato
Requisiti:
- la falsificazione è difficile;
- la duplicazione è eliminata o almeno scopribile;
- l'anonimato del cliente è garantito;
- le operazioni online su un grande database sono il meno possibile.

La carta di credito online non rientra in questa classe, perché non è anonima.

**Protocollo base.** $h$ è un hash pubblico, $f_A$ la funzione pubblica di Alice, $f_{\text{banca}}$ quella della banca.
1. Alice genera una moneta $C$ e invia alla banca $f_A(h(C))$.
2. La banca firma, restituisce $f^{-1}_{\text{banca}}(f_A(h(C)))$ e addebita la somma sul conto.
3. Alice decifra e ottiene $f^{-1}_{\text{banca}}(h(C))$.
4. Per pagare, consegna a Bob $(f^{-1}_{\text{banca}}(h(C)),\,C)$.
5. Bob verifica che $f_{\text{banca}}$ del primo termine sia uguale a $h(C)$.
6. Per incassare, Bob presenta la coppia alla banca, che paga e inserisce $C$ nella lista delle monete già spese.

## Formule chiave
$$\text{verifica di Bob: } f_{\text{banca}}\big(f^{-1}_{\text{banca}}(h(C))\big)\overset{?}{=}h(C).$$

## Intuizione
La banca firma senza vedere $C$, quindi non può collegare la moneta incassata al cliente che l'ha ritirata. La lista delle monete spese blocca la doppia spesa.

**Difetto:** tutte le monete devono avere lo stesso valore, perché la banca firma alla cieca.

## Come si usa
**Assegni di importo arbitrario** (taglia e scegli):
1. Alice prepara $C_1,\dots,C_{100}$ dello stesso importo e invia $f_A(h(C_j))$ per ciascuno;
2. la banca sceglie un indice $i$, si fa mostrare tutti i $C_j$ con $j\neq i$ e controlla che l'importo sia lo stesso;
3. firma $C_i$ e addebita quell'importo.

Barare (99 assegni da 1 euro e uno da 1000) riesce solo se la banca sceglie proprio l'assegno truccato, cioè con probabilità $1/100$, che si riduce aumentando gli assegni (le slide propongono 1000).

**Limite:** chi tenta la doppia spesa viene scoperto, ma non identificato. Per identificarlo senza togliere l'anonimato agli onesti servono protocolli a conoscenza nulla più complessi.

## Nei corsi
- **Crittografia** (magistrale): slide di Bazzanella "Protocolli avanzati". Fonti: `magistrale/Crittografia/Slide/slide crittografia italiano/slide critto italiano/Critto12.pdf` (pp. 20-26).

## Prerequisiti
- [[Firma cieca]]: la banca firma la moneta senza vederla
- [[Funzione hash crittografica]]: si firma $h(C)$
- [[Prova a conoscenza nulla]]: schema taglia e scegli per gli importi

## Porta a
- Nessuno.

## Collegati
- [[Bitcoin]]: denaro elettronico senza autorità centrale
- [[Problema del double spending]]: la lista delle monete spese è la soluzione centralizzata
- [[Crittografia a chiave pubblica]]: funzioni $f_A$ e $f_{\text{banca}}$
