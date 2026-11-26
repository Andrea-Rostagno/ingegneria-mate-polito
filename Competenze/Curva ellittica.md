---
tipo: competenza
area: informatica
corsi: [Blockchain e criptoeconomia, Crittografia]
livello: [magistrale]
aliases: [elliptic curve, curva ellittica su un campo finito, elliptic curve cryptography, ECC, crittografia su curve ellittiche, somma di punti, punto all'infinito, secp256k1]
tags: [competenza, area/informatica]
---

# Curva ellittica

> I punti di $y^2=x^3+ax+b$ su un campo finito, più il punto all'infinito, formano un gruppo: moltiplicare un punto per un intero è facile, tornare indietro è difficile. È la base di ECC, ECDSA e delle chiavi Bitcoin.

## Definizione / enunciato
Una curva ellittica è l'insieme dei $(x,y)\in\mathbb R^2$ che soddisfano un'equazione del tipo $y^2=x^3+ax+b$ (se ne usano anche di forma diversa), con il **punto all'infinito** $\infty$. I punti si **sommano** con la costruzione geometrica della retta per $P$ e $Q$ (slide pp. 22-24); si calcolano $2P=P+P$ e quindi $kP$. In crittografia $x,y\in\mathbb Z_p$ e l'equazione vale modulo $p$: si lavora in ambito discreto.

## Formule chiave
Curva di Bitcoin **secp256k1**:
$$y^2=x^3+7\ \text{su}\ \mathbb Z_p,\qquad p=2^{256}-2^{32}-2^9-2^8-2^7-2^6-2^4-1,$$
con punto base $G$ e numero di punti $n$ primo (valori a 78 cifre decimali in `03-Bitcoin.pdf` p. 19). Chiave privata $d$ intero di 256 bit, chiave pubblica $dG=G+\dots+G$ ($d$ termini). Le formule algebriche della somma non sono nelle fonti.

## Intuizione
Il ruolo che in RSA hanno gli anelli $\mathbb Z_n$ qui lo ha il gruppo dei punti. Poiché $n$ è primo, per il teorema di Lagrange ogni punto non nullo è un generatore, quindi $G$ lo è sicuramente.

## Come si usa
Esempio delle slide: $y^2=x^3+5x+4$ con $p=13$ ha 17 punti (16 nel grafico più $\infty$), con la tabella delle somme a p. 27. ECC è stata proposta da Koblitz e Miller (1985-87) ed è entrata negli standard tardi (OpenSSL 2005, OpenSSH 2011) perché complessa.

## Nei corsi
- **Blockchain e criptoeconomia** (magistrale): fonti `magistrale/Blockchain e criptoeconomia/01-Strumenti.pdf` (pp. 20-27, figure viste sulle pagine renderizzate); `03-Bitcoin.pdf` (pp. 19-22, secp256k1 ed esempio di chiave da *Mastering Bitcoin*); dispensa §1.7.
- **Crittografia** (magistrale): si usa perché l'ECDLP ha ottime caratteristiche one-way: per $n$ bit di sicurezza bastano chiavi di $2n$ bit. **Def. 11.1.7:** $E$ su $GF(q)$ è l'insieme delle coppie che soddisfano $y^2=x^3+ax+b\pmod q$ (forma di Weierstrass), più il punto $O$, con $4a^3+27b^2\neq0\pmod q$. A questa condizione $(E,\boxplus)$ è un gruppo commutativo. Somma esplicita:
  $$(x_3,y_3)=\big(\lambda^2-x_1-x_2,\ -(\lambda x_3+\nu)\big),\quad \lambda=\frac{y_2-y_1}{x_2-x_1}=\frac{x_1^2+x_1x_2+x_2^2+a}{y_1+y_2},\quad \nu=y_1-\lambda x_1,$$
  con $(x_1,y_1)\boxplus(x_1,-y_1)=O$. L'Es. 11.1.8 mostra che con $a=b=0$ la somma non si comporta bene. Esempi delle dispense: $Q=(7,3)\in E:y^2=x^3+7\pmod{11}$; la curva di Koblitz secp256k1 $y^2=x^3+7$ con $p=2^{256}-2^{32}-977$; i punti in forma compressa (prefisso 03) e non compressa (04). I parametri di dominio sono $T=(p,a,b,G,n,h)$. Le dispense italiane aggiungono un'appendice di geometria algebrica, i pairing e un cenno a Fermat-Wiles. Il codice Python `checkEll` e `addpairs` è nella dispensa. Fonti: `magistrale/Crittografia/Slide/slides week 1-14/week11/Crypto11.pdf` (§11.1, pp. 2-8); `magistrale/Crittografia/Esercitazioni/SoluzioniCrypto/Critto_week7.pdf` (Critto 7 §7.2-7.7); `magistrale/Crittografia/Slide/slide crittografia italiano/slide critto italiano/Critto8.pdf` (ECC).

## Prerequisiti
- [[Crittografia a chiave pubblica]]: ECC è un sistema a chiave pubblica
- [[Campo finito]]: coordinate in $\mathbb Z_p$
- [[Gruppo ciclico]]: $G$ genera il gruppo dei punti
- [[Teorema di Lagrange sui gruppi]]: $n$ primo, quindi ogni punto non nullo è generatore

## Porta a
- [[Problema del logaritmo discreto]]: ricavare $k$ da $kP$
- [[Cifratura ElGamal]]: cifratura sui punti della curva
- [[ECDSA]]: firma sui punti della curva
- [[Indirizzo Bitcoin]]: derivato dalla chiave pubblica $dG$

## Collegati
- [[RSA]]: stessa idea su $\mathbb Z_n$, chiavi molto più lunghe
- [[Diffie-Hellman su curve ellittiche]]: scambio di chiavi ECDH sul gruppo dei punti (Crittografia)
- [[Pairing bilineare]]: mappa bilineare sui punti della curva (Crittografia)
- [[Protocollo di Massey-Omura]]: versione EC-Massey-Omura (Crittografia)
